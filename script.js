function showNext(questionId) {
    document.getElementById(questionId).style.display = 'block';
}

function showTextBoxOrNot() {
    const value = document.getElementById('image-or-dockerfile').value;
    if (value === "image")
        document.getElementById('getImageName').style.display = 'block';
    else
        document.getElementById('showFeaturesToAdd').style.display = 'block';
    // document.getElementById('getBuildArgs').style.display = 'block';
}

function generateJSON() {
    const isImage = document.getElementById('image-or-dockerfile').value == "image";
    const isMathWorksBaseImage = document.getElementById('is-image-mw-based').checked;

    let config = {};
    config.name = "Generated DevContainer template"
    if (isImage) {
        config.image = document.getElementById('image-name').value
    } else {
        config.build = {}
        config.build.dockerfile = "Dockerfile";
        config.build.args = {}
    }

    const useDevContainerFeatures = document.getElementById('use-devcontainer-features').checked;
    const startInDesktop = document.getElementById('start-in-desktop').checked;
    const useJupyterNotebooks = document.getElementById('use-jupyter-notebooks').checked;

    if (useDevContainerFeatures) {
        config.features = {};
        matlabFeatureName = "ghcr.io/mathworks/devcontainer-features/matlab";
        config.features[matlabFeatureName] = {}
        matlabFeature = config.features[matlabFeatureName];
        matlabFeature.release = "r2024b";
        matlabFeature.products = "MATLAB Symbolic_Math_Toolbox";
        matlabFeature.startInDesktop = startInDesktop ? "true" : "false";
        matlabFeature.installMatlabProxy = startInDesktop ? "true" : "false";
        matlabFeature.installJupyterMatlabProxy = useJupyterNotebooks ? "true" : "false";

        if (matlabFeature.installJupyterMatlabProxy === "true") {
            pythonFeatureName = "ghcr.io/devcontainers/features/python";
            config.features[pythonFeatureName] = {};
            pythonFeature = config.features[pythonFeatureName];
            pythonFeature.version = "os-provided";
            pythonFeature.installJupyterLab = true;
            pythonFeature.configureJupyterlabAllowOrigin = "*";
        }
    }

    if (startInDesktop) {
        config.portAttributes = {};
        config.portAttributes["8888"] = {};
        config.portAttributes["8888"].label = "MATLAB";
        config.portAttributes["8888"].onAutoForward = "openPreview";
    }

    config.containerEnv = {};
    config.containerEnv.MWI_ENABLE_TOKEN_AUTH = "False";
    config.containerEnv.MATLAB_USERWORKDIR = "${containerWorkspaceFolder}";
    config.containerEnv.MATLAB_USE_USERWORK = "1";
    if (startInDesktop) {
        config.containerEnv.MWI_APP_PORT = "8888";
        config.containerEnv.MWI_CUSTOM_HTTP_HEADERS = '{"Content-Security-Policy": "frame-ancestors *"}'
    }

    config.customizations = {};
    vscode = config.customizations.vscode = {};
    vscode.extensions = ["MathWorks.language-matlab", "ms-toolsai.jupyter", "ms-python.python"];

    settings = config.customizations.settings = {};
    settings["MATLAB.signIn"] = true;
    if (isMathWorksBaseImage) {
        settings["python.venvPath"] = "/home/matlab/.local/pipx/venvs/";
        settings["jupyter.kernels.trusted"] = "/home/matlab/.local/pipx/venvs/matlab-proxy/share/jupyter/kernels/jupyter_matlab_kernel/kernel.json";
    } else {
        settings["jupyter.kernels.trusted"] = "/usr/share/jupyter/kernels/jupyter_matlab_kernel/kernel.json";
    }



    // Display the JSON data
    document.getElementById('jsonOutput').textContent = JSON.stringify(config, null, 2);
    document.getElementById('copyButton').style.display = 'block';

};

document.getElementById('copyButton').addEventListener('click', function () {
    const jsonOutput = document.getElementById('jsonOutput').textContent;

    // Copy the JSON output to the clipboard
    navigator.clipboard.writeText(jsonOutput).then(() => {
        alert('JSON copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});