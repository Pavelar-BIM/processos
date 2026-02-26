const PROJECT_ASSETS = {
    BPMN: {

        "GERAL-MACRO": "assets/bpmn/geral-macro-fases.bpmn",
        "ANTE-PROJETO": "assets/bpmn/arq-acc-aprovacao anteprojeto.bpmn"
    },
    DOCS: {

        "DIRETORIO": "https://drive.google.com/...",
        "NOMENCLATURA": "assets/pdf/nomenclatura-arquivos.pdf",
        "ARQ-BIM-MANDATE": "https://docs.google.com/document/d/1ibmT17CEs1Ao6wvdHqdl6rNAkpJo78No/preview",
        "ARQ-CHECKLIST-EXECUTIVO": "assets/pdf/CHECKLIST ARQUITETURA EXECUTIVO.pdf",
        "ARQ-DIRETRIZES-PROJETO": "assets/pdf/DIRETRIZES ARQUITETURA_V00.pdf",
        "ARQ-CHECKLIST-ASBUILT": "assets/pdf/CHECKLIST ASBUILT ARQUITETÔNICO.pdf",
        "ARQ-CHECKLIST-ANTEPROJETO": "assets/pdf/CHECKLIST ARQUITETURA ANTEPROJETO.pdf",
        "BIM-CHECKLIST-MODELAGEM": "assets/pdf/CHECKLIST ARQUITETURA ANTEPROJETO.pdf",


        "ARQ-VIDEO-Detalhamento automático de ambientes": "https://drive.google.com/file/d/1I_veYztPN8XAZ9FWY6VyyHJDWaWYjcJm/view?usp=classroom_web&authuser=0",
        "ARQ-VIDEO-Georreferenciar: Projeto novo": "https://drive.google.com/file/d/1XfCHMKzUuTy4Q-agwcdjNtEmJiIkCclH/view?usp=classroom_web&authuser=0",
        "ARQ-VIDEO-Georreferenciar: Projeto em andamento": "https://drive.google.com/file/d/18G5WyXjq4dZBSmHiew6Qb3Bl-6tJJ8cI/view?usp=classroom_web&authuser=0",
        "ARQ-VIDEO-Compatibilizar com topografia": "https://drive.google.com/file/d/1mrY5bCIeuaJ19GLt1lY7kC-aM4hFuked/view?usp=classroom_web&authuser=0",
        "ARQ-VIDEO-Revestimento de ambiente automático": "https://drive.google.com/file/d/1iuzBQgp1hEIrWP5lKJxI1q8tarGGKGTb/view?usp=classroom_web&authuser=0",
        "ARQ-VIDEO-Organizando níveis": "https://drive.google.com/file/d/1FKipM3Nsgm3Myr2-2prERsfQqh-nQtUV/view?usp=classroom_web&authuser=0",
        "ARQ-VIDEO-Modelando ACM": "https://drive.google.com/file/d/1UVjqYA7NxVCsv4PKz9aV82KkoWA_M61A/view?usp=classroom_web&authuser=0",
        "ARQ-VIDEO-Modelando telhado completo": "https://drive.google.com/file/d/1unPXpgTrBaNsnbXppGATgQn9-litvvgm/view?usp=classroom_web&authuser=0",
        "ARQ-VIDEO-Publicar no ACC": "ihttps://drive.google.com/file/d/1zgYl93Qw55kFtF-tm-zd6aljCB_GTICA/view?usp=classroom_web&authuser=0",

        


    }
};

function getAsset(key, category = "BPMN") {
    if (!key) return null;
    const searchKey = key.toUpperCase().trim();
    return (PROJECT_ASSETS[category] && PROJECT_ASSETS[category][searchKey]) || null;
}
