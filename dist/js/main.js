document.addEventListener('DOMContentLoaded', () => {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const viewer = document.getElementById('md-viewer'); // ✅ iframe 요소
  const placeholder = document.getElementById('placeholder');

  // 1) 카테고리 아코디언
  categoryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('collapsed');
    });
  });

  // 2) 메뉴 클릭 → iframe 로딩
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-file]');
    if (!link) return;

    e.preventDefault();

    const file = link.dataset.file;

    // ✅ 로그는 반드시 여기(이벤트 안)에서
    console.log('clicked:', link);
    console.log('file:', file);

    // ✅ 배포에서도 안전: 절대경로(/viewer.html)로 생성
    const url = new URL('/viewer.html', window.location.origin);
    url.searchParams.set('file', file);

    // ✅ iframe src 변경
    viewer.src = url.toString();

    // ✅ placeholder 숨김
    if (placeholder) placeholder.style.display = 'none';

    // ✅ active 처리
    document.querySelectorAll('.sub-menu a.active').forEach((a) => a.classList.remove('active'));
    link.classList.add('active');
  });
  viewer.src = url.toString();
  console.log('iframe src:', viewer.src);
});
