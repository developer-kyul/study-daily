document.addEventListener('DOMContentLoaded', () => {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const viewer = document.getElementById('md-viewer');
  const placeholder = document.getElementById('placeholder');

  // 1. 카테고리 아코디언
  categoryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('collapsed');
    });
  });

  // 2. 메뉴 클릭 → iframe 로딩
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-file]');
    if (!link) return;

    e.preventDefault();

    const file = link.dataset.file;

    viewer.src = `/viewer.html?file=${encodeURIComponent(file)}`;
    if (placeholder) placeholder.style.display = 'none';

    // (선택) active 처리 준비
    document.querySelectorAll('.sub-menu a.active').forEach((a) => a.classList.remove('active'));
    link.classList.add('active');
  });
});

console.log('clicked:', link);
console.log('file:', file);
