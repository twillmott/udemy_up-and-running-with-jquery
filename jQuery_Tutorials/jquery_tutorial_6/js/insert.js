$("#btn_main").on("click", () => {
    $(".dope").text("New replacement text");
    $("#btn_main").val("Double Click Me");
});

$("#btn_main").on("dblclick", () => {
    $(".dope").text("You'll learn how to replace me");
    $("#btn_main").val("Replace");
})

$("#btn_new").on("click", () => {
    $(".dope").html('<b class="cool"> Hey there, the HTML has changed</b>');
})

