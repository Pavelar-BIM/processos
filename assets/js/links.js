

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
                        { nome: "Arquitetura",      link: "G:\\Drives compartilhados\\BIM\\TEMPLATES\\ARQUITETURA" },
                        { nome: "Elétrica",           link: "G:\\Drives compartilhados\\BIM\\TEMPLATES\\ELETRICA" },
                        { nome: "Hidráulica",        link: "G:\\Drives compartilhados\\BIM\\TEMPLATES\\HIDRAULICA" },
                        { nome: "Estrutural",        link: "G:\\Drives compartilhados\\BIM\\TEMPLATES\\CIVIL" }
                    ]
                },
                {
                    nome: "Plugins",
                    subitens:[
                        { nome: "BIMflow",      link: "G:\\Drives compartilhados\\BIM\\TEMPLATES\\ARQUITETURA" },
                        { nome: "Pyrevit",           link: "G:\\Drives compartilhados\\BIM\\TEMPLATES\\ELETRICA" },
                        { nome: "Prosheets",        link: "G:\\Drives compartilhados\\BIM\\TEMPLATES\\HIDRAULICA" }
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
                        { 
                            nome: "Projetos", 
                            subitens: [
                                { nome: "Diretrizes gerais", link: "assets/pdf/DIRETRIZES ARQUITETURA_V00.pdf" },
                                { nome: "Checklist executivo", link: "assets/pdf/CHECKLIST ARQUITETURA EXECUTIVO.pdf" }
                            ]
                        },
                        { 
                            nome: "Modelagem", 
                            subitens: [ 
                                { nome: "BIM Mandate", link: "https://docs.google.com/document/d/1ibmT17CEs1Ao6wvdHqdl6rNAkpJo78No/preview" },
                                { nome: "Criação de Famílias", link: "assets/bpmn/arq-modelagem-familias.bpmn" },
                                { nome: "Checklist modelagem", link: "pages/arq-checklist-bim.html" }
                            ]
                        }
                    ]
                },
                { nome: "Estrutural",   link: "pages/proc-est.html" },
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
