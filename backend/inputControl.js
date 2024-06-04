// document.addEventListener("DOMContentLoaded", function() {
//     const codeInput = document.querySelector('.code_input');
//     const postButton = document.querySelector('.post_button .txt');
//
//     codeInput.addEventListener('input', function() {
//         if (codeInput.value.toLowerCase() === 'all pass') {
//             postButton.textContent = "祝您歐趴";
//         } else {
//             postButton.textContent = "不讓你換";
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const codeInput = document.querySelector('.code_input');
//     const authInput = document.querySelector('.auth_input');
//     const postButton = document.querySelector('.post_button .txt');
//
//     function updateButton() {
//         if (authInput.value !== 'JI1') {
//             postButton.textContent = "驗證碼輸入錯誤";
//         } else if (codeInput.value.toLowerCase() === 'all pass') {
//             postButton.textContent = "祝您歐趴";
//         } else {
//             postButton.textContent = "不讓你換";
//         }
//     }
//
//     codeInput.addEventListener('input', updateButton);
//     authInput.addEventListener('input', updateButton);
// });

document.addEventListener("DOMContentLoaded", function() {
    const codeInput = document.querySelector('.code_input');
    const authInput = document.querySelector('.auth_input');
    const postButton = document.querySelector('.post_button .txt');

    function updateButtonText() {
        if (authInput.value !== 'JI1') {
            postButton.textContent = "驗證碼輸入錯誤";
        } else if (codeInput.value.toLowerCase() === 'all pass') {
            postButton.textContent = "祝您歐趴";
        } else {
            postButton.textContent = "不讓你換";
        }
    }

    postButton.addEventListener('click', updateButtonText);
});

document.querySelector('.how_button').addEventListener('click', function() {
    var tips = document.querySelector('.tips_mc.how_tips');
    tips.classList.toggle('hidden');
});

