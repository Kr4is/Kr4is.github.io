AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language.</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.</li>"
  },
  {
    langImage:"assets/images/techstack-page/docker.png",
    langName:"Docker",
    langDesc:"<li>Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.</li>"
  },
  {
    langImage:"assets/images/techstack-page/linux.png",
    langName:"Linux",
    langDesc:"<li>Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds.</li>"
  },
  {
    langImage:"assets/images/techstack-page/cmake.svg",
    langName:"CMake",
    langDesc:"<li>CMake is an open-source, cross-platform family of tools designed to build, test and package software.</li>"
  },
  {
    langImage:"assets/images/techstack-page/conan.svg",
    langName:"Conan",
    langDesc:"<li>Conan is a software package manager for C and C++ developers that allows you to create and share native binaries across different platforms and build systems.</li>"
  },
  {
    langImage:"assets/images/techstack-page/dvc.png",
    langName:"DVC",
    langDesc:"<li>DVC is a tool for data science that takes advantage of existing software engineering toolset. It helps machine learning teams manage large datasets, make projects reproducible, and collaborate better.</li>"
  },
  {
    langImage:"assets/images/techstack-page/ffmpeg.png",
    langName:"Ffmpeg",
    langDesc:"<li>FFmpeg is a free and open-source software project consisting of a suite of libraries and programs for handling video, audio, and other multimedia files and streams.</li>"
  },
  {
    langImage:"assets/images/techstack-page/lightning.png",
    langName:"Lightning",
    langDesc:"<li>PyTorch Lightning is the deep learning framework for professional AI researchers and machine learning engineers who need maximal flexibility without sacrificing performance at scale.</li>"
  },
  {
    langImage:"assets/images/techstack-page/precommit.svg",
    langName:"Pre-commit",
    langDesc:"<li>Pre-commit is a package manager that lets you install and run any hook written in any language before every commit.</li>"
  },
  {
    langImage:"assets/images/techstack-page/pytorch.png",
    langName:"Pytorch",
    langDesc:"<li>PyTorch is a machine learning framework based on the Torch library, used for applications such as computer vision and natural language processing, originally developed by Meta AI and now part of the Linux Foundation umbrella.</li>"
  },
  {
    langImage:"assets/images/techstack-page/tmux.png",
    langName:"Tmux",
    langDesc:"<li>Tmux is a terminal multiplexer for Unix-like operating systems. It allows multiple terminal sessions to be accessed simultaneously in a single window.</li>"
  },
  {
    langImage:"assets/images/techstack-page/keras.png",
    langName:"Keras",
    langDesc:"<li>Keras is an open-source library that provides a Python interface for artificial neural networks. Keras acts as an interface for the TensorFlow library.</li>"
  },
  {
    langImage:"assets/images/techstack-page/mlflow.svg",
    langName:"MLflow",
    langDesc:"<li>MLflow is a platform to streamline machine learning development, including tracking experiments, packaging code into reproducible runs, and sharing and deploying models.</li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
