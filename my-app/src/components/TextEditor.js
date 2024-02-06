function TextEditor(text) {
    if(text.includes("<")) {
        const splitText = text.split("<");
        const speicalizedText = splitText.map((editedText, i) => {
            if(editedText.startsWith("/u>")) {
                return <u key={i}>{editedText.replace("/u>", "")}</u>;
            } else if(editedText.startsWith("/b>")) {
                return <b key={i}>{editedText.replace("/b>", "")}</b>;
            }
            return editedText.replace("/p>", "");
        })
        return speicalizedText;
    }
    return text;
}

export default TextEditor;