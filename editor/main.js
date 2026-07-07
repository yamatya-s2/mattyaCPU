
require.config({
    paths: {
        vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
    }
});


//tab
function change_tab(type){
const TAB_ID={
1:"tab_editor",
2:"tab_asm",
3:"tab_cpu"
}

for(let i=1;i<=3;i++){
if (i ==type){
showDiv(TAB_ID[i])
}else{
hideDiv(TAB_ID[i])
}
}

}

function hideDiv(id) {
  document.getElementById(id).style.display = "none";
}

function showDiv(id) {
  document.getElementById(id).style.display = "block";
}


let editor;

require(["vs/editor/editor.main"], function () {

    editor = monaco.editor.create(
        document.getElementById("editor"),
        {
            value: "",
            language: "asm",
            theme: "vs-dark",
            automaticLayout: true

        }
    );


    // 自動保存
    editor.onDidChangeModelContent(() => {

        localStorage.setItem(
            "editor_code",
            editor.getValue()
        );

        console.log("saved");
    });

 const fileInput = document.getElementById("editor_file");

fileInput.addEventListener("change", function(e) {

    const file = e.target.files[0];

    if (!file) {
        console.log("no file");
        return;
    }

    console.log("selected:", file.name);


    const reader = new FileReader();


    reader.onload = function(event) {

        console.log("file content:");
        console.log(event.target.result);


        editor.setValue(event.target.result);

        console.log("editor updated");

    };


    reader.readAsText(file);

});
});
