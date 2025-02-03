# Run MATLAB in GitHub Codespaces

This repository shows how to run MATLAB&reg; in [GitHub&trade; Codespaces](https://github.com/features/codespaces).

Codespaces allow you to quickly bring up a development environment where you can continue developing on the code hosted in your Github repository, and this repository shows you how you could get MATLAB there.

<details>
<summary><b>When should I use a codespaces?</b></summary>

```
If you own a Github repository hosting MATLAB Code, codespaces provide a easy way for the users of your repository to:
  a. provision a consistent development environment  
  b. run your code in MATLAB and any other supporting softwares,
  c. use git to contribute back to your repository.
```
GitHub Codespaces can be a powerful tool for development, particularly in scenarios where you need a consistent and accessible development environment. Here are some situations where using a GitHub Codespace might be beneficial:

1. **Onboarding New Team Members**: Codespaces can help new developers get started quickly by providing a pre-configured environment that matches the team's setup. This reduces the time spent on configuring local development environments.

2. **Working on Multiple Projects**: If you're juggling multiple projects, Codespaces can help by providing isolated environments for each project. This prevents dependency conflicts and ensures each project has the necessary tools and libraries.

3. **Collaborative Development**: Codespaces can be useful for pair programming or collaborative development. Team members can easily share their environment, making it easier to work together on code.

4. **Developing on Low-Power Devices**: If you're working on a device with limited resources, like a tablet or a low-power laptop, Codespaces can offload the heavy lifting to the cloud, providing a powerful development environment regardless of your local hardware.

5. **Experimenting with New Tools or Technologies**: If you want to try out a new language, framework, or tool without affecting your local setup, Codespaces provide a sandbox environment where you can experiment freely.

6. **Contributing to Open Source Projects**: Codespaces can simplify the process of contributing to open source projects by providing a consistent environment that matches the project's requirements, reducing setup time and potential configuration issues.

7. **Running CI/CD Workflows Locally**: You can use Codespaces to run tests and build processes in an environment that closely mirrors your CI/CD setup, ensuring consistency between local development and production environments.

8. **Accessing Development Environment from Anywhere**: Since Codespaces are cloud-based, you can access your development environment from any device with an internet connection, making it easy to switch between devices or work remotely.

Overall, GitHub Codespaces are ideal when you need a flexible, consistent, and powerful development environment that can be accessed from anywhere.

A few scenarios where these capabilities might be useful are:

As an educator you could use codespaces when:
1. You want to develop a workshop where all your students can spin up the same development environment irrespective of the Operating System or machine from which they are working.
2. Create homework assignments, where all your students can develop solutions and submit their homework as Pull requests. Github codespaces can be used with [Github Classrooms](https://docs.github.com/en/education/manage-coursework-with-github-classroom/get-started-with-github-classroom/about-github-classroom) to streamline this!

As a researcher you could use codespaces to:
1. Have your fellow researchers spin up the exact environment in which they can run your code. Where you have full control of the version of MATLAB and the toolboxes required to work on the code.
2. Provide an easy way for them to collaborate with you, and share their suggestions with you. 

</details>

<details>
<summary><b>When should I use Codespaces instead of MATLAB Online?</b></summary>

Yes, you can always have your users work with your repository by running it directly in MATLAB Online.
See [Open Github Repositories in MATLAB Online](https://www.mathworks.com/help/matlab/matlab_env/open-github-repositories-in-matlab-online.html) for more information on how to do that.

When deciding between GitHub Codespaces and MATLAB Online for MATLAB development, consider the following factors to determine which is more suitable for your needs:

### Use GitHub Codespaces if:
1. **Integration with GitHub**: You want seamless integration with GitHub repositories, including easy access to version control, pull requests, and collaboration features directly within the development environment.

2. **Customizable Environment**: You need a highly customizable development environment where you can install additional tools, libraries, or dependencies alongside MATLAB. Codespaces allow you to define your environment using Dockerfiles or devcontainer.json configurations.

3. **Multi-language Projects**: You're working on projects that involve multiple programming languages or tools beyond MATLAB. Codespaces can host a variety of development environments, making it easier to switch contexts or integrate different technologies.

4. **Collaboration**: You require advanced collaboration features, such as shared editing or live collaboration with other developers, which Codespaces can facilitate through its integration with Visual Studio Code.

5. **Consistent Development Environment**: You want to ensure consistency across different development environments, particularly if you're working in a team. Codespaces provide a consistent setup that can be easily replicated by all team members.

6. **Resource Flexibility**: You need more control over the resources allocated to your development environment (e.g., CPU, memory), which can be adjusted in Codespaces to better suit your project’s demands.

### Use MATLAB Online if:
1. **MATLAB-Specific Features**: You need access to MATLAB-specific features, toolboxes, or apps that are fully supported and optimized in MATLAB Online. This includes specialized MATLAB functionalities that might not be as seamlessly integrated in a Codespace.

2. **Simplicity and Ease of Use**: You prefer a straightforward, ready-to-use MATLAB environment without the need for additional configuration or setup. MATLAB Online provides an out-of-the-box experience tailored specifically for MATLAB users.

3. **Educational Use**: You're a student or educator using MATLAB for coursework or teaching. MATLAB Online is often provided by educational institutions and includes features designed for learning and instruction.

4. **MATLAB-Only Projects**: Your development focus is solely on MATLAB, with no need for additional languages or tools. MATLAB Online is optimized specifically for MATLAB workflows.

5. **Licensing and Access**: You have access to MATLAB Online through an existing license, which might be more cost-effective or convenient compared to setting up a separate environment in Codespaces.

Ultimately, the choice between GitHub Codespaces and MATLAB Online depends on your specific needs, the complexity of your project, and the tools you require. If your work involves heavy collaboration, integration with other tools, or requires a highly customizable environment, Codespaces might be the better option. However, for straightforward MATLAB development with access to MATLAB-specific features, MATLAB Online could be more appropriate.
</details>

<details>
<summary><b>How can I use MATLAB in a codespace?</b></summary>

You can:
1. Run & Debug M files in VSCode
2. Run MATLAB Code from Jupyter Notebooks in VSCode
3. For everything else, you could switch over to using the MATLAB Desktop
4. If you prefer running JupyterLab instead of VSCode, then you can also run notebooks and switch to the desktop there.

For more on VSCode, see [Access MATLAB using Visual Studio Code](#access-matlab-using-visual-studio-code).

For JupyterLab, see [Access MATLAB using JupyterLab](#access-matlab-using-jupyterlab).

</details>

<details>
<summary><b>Great! Now I know I want to use codespaces, which configuration is should I use?</b></summary>

This repository contains three Dev Container configuration files.
These configuration files **mainly** differ in the way MATLAB & supporting tools are installed into them.
Each of them provide **all the access modes specified above**, and can be used from the **VS Code, or JupyterLab** interface.

By default, when the codespaces from any of these configuration files is opened in VS Code.
1. MATLAB will open in a browser tab embedded into the VS Code interface.
2. You can sign in to the page to continue using the MATLAB IDE, or close the tab.

----

#### Option 1: Use prebuilt MATLAB Containers

If you only need MATLAB, and no other software, consider using one of the pre-built MATLAB Containers.
* See [mathworks/matlab](https://hub.docker.com/r/mathworks/matlab)
* Or [mathworks/matlab-deep-learning](https://hub.docker.com/r/mathworks/matlab-deep-learning)

<details>
<summary><b>Yes! Show me how to use a prebuilt MathWorks image for my codespace...</b></summary>

Use this [devcontainer.json](.devcontainer/devcontainer.json) when you have an image that is one of the [MathWorks official images published on Docker Hub](https://hub.docker.com/r/mathworks/matlab), or is built on top of them. See [Building on MATLAB Docker Image](https://github.com/mathworks-ref-arch/matlab-dockerfile/tree/main/alternates/building-on-matlab-docker-image) for more information.

<details>
<summary>Click to see <b>devcontainer.json</b></summary>

```json
{
  "name": "Built using MathWorks Docker Hub Image",
  "image": "mathworks/matlab:latest",
  "onCreateCommand": {
    "install-dependencies": "sudo apt-get update && sudo apt-get install --no-install-recommends -y git xvfb"
  },
  "updateContentCommand": {
    "install-mifj-and-jupyterlab": "pipx upgrade matlab-proxy && pipx inject --include-apps --include-deps matlab-proxy jupyter-matlab-proxy jupyterlab"
  },
  "waitFor": "updateContentCommand",
  "postStartCommand": {
    "start-matlab-desktop": "run.sh -browser"
  },
  "portsAttributes": {
    "8888": {
      "label": "MATLAB",
      "onAutoForward": "openPreview"
    }
  },
  "containerEnv": {
    "MWI_APP_PORT": "8888",
    "MWI_ENABLE_TOKEN_AUTH": "False",
    "MATLAB_USERWORKDIR": "${containerWorkspaceFolder}",
    "MATLAB_USE_USERWORK": "1",
    "MWI_CUSTOM_HTTP_HEADERS": "{\"Content-Security-Policy\": \"frame-ancestors *\"}"
  },
  "customizations": {
    "vscode": {
      "extensions": [
        "MathWorks.language-matlab",
        "ms-toolsai.jupyter",
        "ms-python.python"
      ],
      "settings": {
        "MATLAB.signIn": true,
        "python.venvPath": "/home/matlab/.local/pipx/venvs/",
        "jupyter.kernels.trusted": [
          "/home/matlab/.local/pipx/venvs/matlab-proxy/share/jupyter/kernels/jupyter_matlab_kernel/kernel.json"
        ]
      }
    }
  },
  "hostRequirements": {
    "cpus": 4
  }
}
```
</details>

You could click below to run this configuration in Codespaces:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new/mathworks-ref-arch/matlab-codespaces?template=false&devcontainer_path=.devcontainer%2Fdevcontainer.json)
</details>

-----
#### Option 2 : Create a container using a Dockerfile

If you need to tailor your installation of MATLAB with specific set of toolboxes, or install other software, then you could write your own Dockerfile. See [mathworks-ref-arch/matlab-dockerfile](https://github.com/mathworks-ref-arch/matlab-dockerfile)

<details>
<summary><b> Yes! I want to use my own Dockerfile. Show me how...</b></summary>
  
Use this [devcontainer.json](.devcontainer/using-matlab-dockerfile/devcontainer.json) when you want to build an Image from a Dockerfile.
An example Dockerfile taken from the [MATLAB Dockerfile](https://github.com/mathworks-ref-arch/matlab-dockerfile) repository is available within the `.devcontainer/using-matlab-dockerfile` folder.

<details>
<summary><b>devcontainer.json</b></summary>

```json
{
  "name": "Built using MATLAB Dockerfile",
  "build": {
      "dockerfile": "Dockerfile",
      "args": {
          "MATLAB_RELEASE": "r2024b",
          "MATLAB_PRODUCT_LIST": "MATLAB Symbolic_Math_Toolbox"
      }
  },
  "onCreateCommand": {
      "install-dependencies": "sudo apt-get update && sudo apt-get install --no-install-recommends -y git python3 python3-pip xvfb"
  },
  "updateContentCommand": {
      "install-mifj-and-jupyterlab": "sudo python3 -m pip install --upgrade matlab-proxy jupyter-matlab-proxy jupyterlab && sudo install-matlab-kernelspec"
  },
  "waitFor": "updateContentCommand",
  "postStartCommand": {
      "start-matlab-desktop": "matlab-proxy-app"
  },
  "portsAttributes": {
      "8888": {
          "label": "MATLAB",
          "onAutoForward": "openPreview"
      }
  },
  "containerEnv": {
      "MWI_APP_PORT": "8888",
      "MWI_ENABLE_TOKEN_AUTH": "False",
      "MATLAB_USERWORKDIR": "${containerWorkspaceFolder}",
      "MATLAB_USE_USERWORK": "1",
      "MWI_CUSTOM_HTTP_HEADERS": "{\"Content-Security-Policy\": \"frame-ancestors *\"}"
  },
  "customizations": {
      "vscode": {
          "extensions": [
              "MathWorks.language-matlab",
              "ms-toolsai.jupyter",
              "ms-python.python"
          ],
          "settings": {
              "MATLAB.signIn": true,
              "jupyter.kernels.trusted": [
                  "/usr/share/jupyter/kernels/jupyter_matlab_kernel/kernel.json"
              ]
          }
      }
  },
  "hostRequirements": {
      "cpus": 4
  }
}
```
</details>

You could click below to run this configuration in Codespaces:
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new/mathworks-ref-arch/matlab-codespaces?template=false&devcontainer_path=.devcontainer%2Fusing-matlab-dockerfile%2Fdevcontainer.json)
</details>

-----

#### Option 3: Use the MATLAB Feature for Dev Containers

Finally, if you already have devcontainer configuration and you would like to add MATLAB & its supporting tools you could use the [MATLAB Feature for Devcontainers](https://github.com/mathworks/devcontainer-features/tree/main/src/matlab).

<details>
<summary><b>Yes! Show me how to use the MATLAB Feature for Dev Containers.</b></summary>
  
Use this [devcontainer.json](.devcontainer/using-devcontainer-feature/devcontainer.json) when you would like to add MATLAB & its supporting tools into an existing Dev Container configuration using  self-contained units of code called [Features (GitHub)](https://github.com/devcontainers/features).

<details>
<summary><b>devcontainer.json</b></summary>

```json
{
  "name": "Built using Dev Container Features",
  "image": "mcr.microsoft.com/devcontainers/base:ubuntu",
  "features": {
    "ghcr.io/mathworks/devcontainer-features/matlab": {
      "release": "r2024b",
      "products": "MATLAB Symbolic_Math_Toolbox",
      "installMatlabProxy": "true",
      "startInDesktop": "true",
      "installJupyterMatlabProxy": true
    },
    "ghcr.io/devcontainers/features/python": {
      "version": "os-provided",
      "installJupyterlab": true,
      "configureJupyterlabAllowOrigin": "*"
    }
  },
  "portsAttributes": {
    "8888": {
      "label": "MATLAB",
      "onAutoForward": "openPreview"
    }
  },
  "containerEnv": {
    "MWI_APP_PORT": "8888",
    "MWI_ENABLE_TOKEN_AUTH": "False",
    "MATLAB_USERWORKDIR": "${containerWorkspaceFolder}",
    "MATLAB_USE_USERWORK": "1",
    "MWI_CUSTOM_HTTP_HEADERS": "{\"Content-Security-Policy\": \"frame-ancestors *\"}"
  },
  "customizations": {
    "vscode": {
      "extensions": [
        "MathWorks.language-matlab",
        "ms-toolsai.jupyter",
        "ms-python.python"
      ],
      "settings": {
        "MATLAB.signIn": true,
        "jupyter.kernels.trusted": [
          "/usr/share/jupyter/kernels/jupyter_matlab_kernel/kernel.json"
        ]
      }
    }
  },
  "hostRequirements": {
    "cpus": 4
  },
  "containerUser": "vscode"
}
```

You could click below to run this configuration in Codespaces:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new/mathworks-ref-arch/matlab-codespaces?template=false&devcontainer_path=.devcontainer%2Fusing-devcontainer-feature%2Fdevcontainer.json)

</details>
</details>
</details>

<details>
<summary><b>How do I create a configuration for my needs?</b></summary>

As mentioned above, there are 3 configuration files in the [.devcontainer](./.devcontainer) folder for you to choose from.
Tailor the one that is closest to your needs.

</details>

## Introduction

A [codespace (GitHub Docs)](https://docs.github.com/en/codespaces/overview) is a development environment you can run in the cloud. Codespaces run in Docker containers called development containers, or [dev containers (GitHub Docs)](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers). You can customize your codespace by modifying `devcontainer.json`, the configuration file of the dev container.

By default codespaces start in a [Visual Studio Code](https://code.visualstudio.com/) environment, but you could also use [JupyterLab](https://jupyter.org) as your IDE.

![VSCode In Codespaces](img/VSCodeInCodespaces.png)

### Access MATLAB using Visual Studio Code

Once you have MATLAB and the necessary extensions and packages installed into the container, there are **three** ways in which you can use it from the VS Code interface: 

1. **Run & Debug MATLAB files in the VS Code editor.**</br>
   
   ![Run and Debug MATLAB in VS Code](img/RunAndDebugInVSCode.gif)
   
   For more information, see [MATLAB Extension for Visual Studio Code](https://github.com/mathworks/MATLAB-extension-for-vscode).


2. **Access the MATLAB IDE in a browser window.**</br>

   ![MATLAB Proxy](img/MATLABinBrowser.png)

   For more information, see [MATLAB Proxy](https://github.com/mathworks/matlab-proxy?tab=readme-ov-file#usage).

3. **Run MATLAB code using Jupyter Notebooks in VS Code.**</br>
   
   ![Jupyter Notebook In VS Code](img/JupyterNotebookInVSCode.gif)

   For more information, see [Jupyter Notebooks in VS Code](https://code.visualstudio.com/docs/datascience/jupyter-notebooks)

### Access MATLAB using JupyterLab
Codespaces support [opening your codespace in JupyterLab](https://docs.github.com/en/codespaces/developing-in-a-codespace/getting-started-with-github-codespaces-for-machine-learning#opening-your-codespace-in-jupyterlab) as shown below:

![Open In JupyterLab](img/OpenInJupyterLab.gif)


When you have `JupyterLab` and the [MATLAB Integration for Jupyter](https://github.com/mathworks/jupyter-matlab-proxy) installed, there are **two** ways in which you can use it from the JupyterLab Interface: 

1. **Run MATLAB code using Jupyter Notebooks.**</br>
   
   ![Run MATLAB code using Jupyter Notebooks](https://github.com/mathworks/jupyter-matlab-proxy/raw/main/img/JupyterKernel.gif)

2. **Access the MATLAB in a browser window.**</br>
      
   ![Access the MATLAB in a browser window](https://github.com/mathworks/jupyter-matlab-proxy/raw/main/img/JupyterMATLABDesktop.gif)


## Related Links 
- [Overview of Codespaces (GitHub)](https://docs.github.com/en/codespaces/overview)
- [Development Container Features (GitHub)](https://github.com/devcontainers/features/)
- [Development Container Specification (Microsoft&reg;)](https://containers.dev/implementors/spec/)
- [Setting Your Default Editor for Codespaces (GitHub)](https://docs.github.com/en/codespaces/setting-your-user-preferences/setting-your-default-editor-for-github-codespaces)
- [Run Dev Containers in VS Code (VS Code Docs) ](https://code.visualstudio.com/docs/devcontainers/create-dev-container)

---

Copyright 2024-2025 The MathWorks, Inc.

---
