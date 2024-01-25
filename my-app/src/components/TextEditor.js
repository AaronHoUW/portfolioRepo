function TextEditor(text) {
    if(text.includes("<")) {
        const splitText = text.split("<");
        const speicalizedText = splitText.map((editedText, i) => {
            if(editedText.startsWith("/u>")) {
                return <u key={i}>{editedText.replace("/u>", "")}</u>;
            }
            return editedText.replace("/p>", "");
        })
        return speicalizedText;
    }
    return text;
}

export default TextEditor;