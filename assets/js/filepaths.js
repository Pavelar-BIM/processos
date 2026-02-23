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
        "BIM-CHECKLIST-MODELAGEM": "assets/pdf/CHECKLIST ARQUITETURA ANTEPROJETO.pdf"

    }
};

function getAsset(key, category = "BPMN") {
    if (!key) return null;
    const searchKey = key.toUpperCase().trim();
    return (PROJECT_ASSETS[category] && PROJECT_ASSETS[category][searchKey]) || null;
}