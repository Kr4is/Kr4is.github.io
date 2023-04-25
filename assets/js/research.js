/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Real-time classification of handball game situations",
    authors:
      "Bruno Cabado, Bertha Guijarro-Berdiñas, Emilio J. Padrón",
    conferences:
      "2022 IEEE 34th International Conference on Tools with Artificial Intelligence (ICTAI)",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/densenet-23.png",
    citation: {
      vancouver:
        "B. Cabado, B. Guijarro-Berdiñas and E. J. Padrón, 'Real-time classification of handball game situations', 2022 IEEE 34th International Conference on Tools with Artificial Intelligence (ICTAI), Macao, China, 2022, pp. 686-691, doi: 10.1109/ICTAI56018.2022.00106.",
    },
    abstract:
      "During the broadcast of sporting events, certain situations such as a penalty or a time-out occur, for which a specific action is required. In traditional broadcasting, many people are implied in making decisions based on what is happening at any given moment. To broadcast quality and entirely automatically matches it is necessary to be able to classify the important situations and then make decisions based on them. This paper presents a solution based on deep learning which is able to classify the main states of a handball match. The generated model has been trained using 127,600 images of 13 local team matches. On a test set of 118,129 images of other 7 matches, it is able to classify these situations with an accuracy of 98.6% in only 4 milliseconds, allowing to analyze the state of the game in real time. The full pipeline takes only 34.04 milliseconds using GPU acceleration, processing more than 25 frames per seconds.",
    absbox: "absPopup1",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
