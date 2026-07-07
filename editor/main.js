require.config({
    paths: {
        vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
    }
});

require(["vs/editor/editor.main"], function () {

    const editor = monaco.editor.create(
        document.getElementById("editor"),
        {
            value: `function hello() {
    console.log("Hello");
}`,
            language: "javascript",
            theme: "vs-dark",
            automaticLayout: true
        }
    );

});
