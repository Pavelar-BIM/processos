

window.CONFIG = {
    referencias: {
        google_classroom_arq: "https://classroom.google.com/w/Njg4OTYxNDc5NjQ2/t/all"
    },

    menus: [
        {
            titulo: "FERRAMENTAS",
            itens: [
                {
                    nome: "Templates",
                    subitens:[
                        { nome: "Arquitetura",      link: "https://drive.google.com/drive/folders/1qRgtlEvYYokOv8dKe8sa3OXFBATtK0NN?usp=drive_link" },
                        { nome: "Elétrica",           link: "https://drive.google.com/drive/folders/1ZAGq0WSR-Zh5yYL0aWt_68afvIsUHIw5?usp=drive_link" },
                        { nome: "Hidráulica",        link: "https://drive.google.com/drive/folders/1ADPPDWQZCpRZlEjrlViupE8QFmi99Gpn?usp=drive_link" },
                        { nome: "Estrutural",        link: "https://drive.google.com/drive/folders/1ZXrqdE6wTNRkRtui-ZGFjpudX1C63414?usp=drive_link" },
                        { nome: "Climatização",       link:"https://drive.google.com/drive/folders/1xfOdIRpHfoG7ZOcmiZfVoYnE3xYRxl8J?usp=drive_link"},
                        { nome: "Compatibilização",     link:"https://drive.google.com/drive/folders/1wDpz3rqUhQJ8lQ4vfhmcRHW2byNtV0Av?usp=drive_link"},
                        { nome: "GLP",     link:"https://drive.google.com/drive/folders/1NSrulj3A5ux-AAF1A-fNikIUh8TfxExq?usp=drive_link"},
                    ]
                },
                {
                    nome: "Plugins",
                    subitens:[
                        { nome: "BIMflow",
                            subitens:[
                                { nome: "Download", link: "https://drive.google.com/file/d/1i1QPDNDFZDx6eEi2IlYvla82faGByULu/view?usp=drive_link" },
                                { nome: "Tutorial: Istalação", link: "https://drive.google.com/file/d/1eRuySPx0u_F9gj6seOQOjwzE3R8h-pId/view" },
                                { nome: "Tutoriais: Comandos", link: "https://classroom.google.com/w/NzQzNzQxMDE1MzM3/t/all" },
                            
                            ]      
                        },


                        { nome: "PyRevit",
                            subitens:[
                                { nome: "Download", link: "https://drive.google.com/drive/folders/16MF881KZuKMwAtksQ1lT6umbclJyWFSK?usp=drive_link" },
                                { nome: "Tutorial: Instalação", link: "https://drive.google.com/drive/folders/11WC1VBir3s8B263fzgkY3KfseI3h5TV7?usp=drive_link" }
                            
                            ]      
                        },

                        { nome: "Prosheets",
                            subitens:[
                                { nome: "Download", link: "https://drive.google.com/drive/folders/1IOBWkrDlbMIOjks2LerTDKj2ys01U6Va?usp=drive_link" },
                                { nome: "Tutorial: gerar PDF", link: "https://drive.google.com/file/d/1DShbFjxCqE15zNXT0T8RFQm9Vm1khobP/view" }
                            
                            ]      
                        },
                    ]
                }
            ]
        },






        
{
            titulo: "PROCESSOS - GERAL",
            itens: [
                { nome: "Aprovação ACC", link: "pages/visualizador-acc.html" },
                { nome: "Padrão de nomenclatura", link: "assets/pdf/nomenclatura-arquivos.pdf" },
                { nome: "Outro", link: "#placeholder-link" }
            ]
        },









        { 
            titulo: "PROCESSOS - DISCIPLINAS",
            itens: [

                {
            nome: "Arquitetura",
            subitens: [
                { nome: "Diretrizes gerais", link: "assets/pdf/DIRETRIZES ARQUITETURA_V00.pdf" },
                { nome: "BIM Mandate", link: "https://docs.google.com/document/d/1ibmT17CEs1Ao6wvdHqdl6rNAkpJo78No/preview" },
                { nome: "Criação de Famílias", link: "assets/bpmn/arq-modelagem-familias.bpmn" },
                { nome: "Checklist executivo", link: "assets/pdf/CHECKLIST ARQUITETURA EXECUTIVO.pdf" },
                { nome: "Checklist modelagem", link: "pages/arq-checklist-bim.html" }
                      ]
                },

                {  nome: "Estrutural", 
                            subitens: [
                        { nome: "Checklist - Pranchas de concreto", link: "pages/ec-checklist-pranchas concreto.html" },
                            ]
                },
                { nome: "Elétrica",     link: "pages/proc-ele.html" },
{ 
    nome: "Hidráulica",        
    subitens: [
        { nome: "POP", link: "assets/bpmn/arq-modelagem-familias.bpmn" },
        { nome: "Checklist - Escolas", link: "pages/hid-checklist-escolas.html" }
    ] 
}
            ]
        },









        {
            titulo: "EQUIPE BIM",
            itens: [
                { nome: "Linha do tempo",    link: "pages/bim-timeline.html" },
                { nome: "Tutoriais Internos",    link: "pages/bim-tutoriais.html" },
                { nome: "Processos Internos",    link: "pages/bim-processos.html" }
            ]
        }
    ],

    fluxogramas: {
        links: {
            "anteprojeto": "assets/bpmn/arq-acc-aprovacao anteprojeto.bpmn"
        }
    }
};
