var text = prompt("Enter a word to check if it's a palindrome:");
    text = text.toLowerCase();
    var reversed = "";

    for (var i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    if (text === reversed) {
        Swal.fire({
  title: "✅ Yes! '" + text + "' is a palindrome.",
  icon: "success",
  draggable: true
});
    } else {  
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "❌ No! '" + text + "' is not a palindrome.",
});
} 