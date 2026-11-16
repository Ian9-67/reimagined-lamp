// 設定 MathJax 支援單錢字號 $...$
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  }
};

// 動態載入 MathJax CDN
(function () {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();

// 綁定所有「顯示/隱藏詳解」按鈕
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.solution-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = content.classList.toggle('open');
      btn.textContent = isOpen ? '隱藏詳解' : '顯示詳解';
    });
  });
});
