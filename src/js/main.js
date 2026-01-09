document.addEventListener('DOMContentLoaded', () => {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const menuLinks = document.querySelectorAll('.sub-menu a');
  const viewer = document.getElementById('md-viewer');
  const placeholder = document.getElementById('placeholder');

  // 1. 카테고리 아코디언 기능 (접고 펴기)
  categoryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('collapsed');
    });
  });

  // 2. 메뉴 클릭 시 노트 불러오기 기능
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      menuLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');

      const filePath = link.getAttribute('data-file');

      // [수정 핵심] 한글 파일명과 공백을 URL용 안전 문자로 변환합니다.
      const encodedPath = encodeURIComponent(filePath);
      viewer.src = 'viewer.html?file=' + encodedPath;

      viewer.onload = () => {
        try {
          const iframeDoc = viewer.contentDocument || viewer.contentWindow.document;

          // 1. 내부 "목록으로" 버튼 숨기기
          const header = iframeDoc.querySelector('.top') || iframeDoc.querySelector('.top-nav');
          if (header) {
            header.style.display = 'none';
          }

          // 2. 이미지 에러 체크
          const images = iframeDoc.querySelectorAll('img');
          images.forEach((img) => {
            img.onerror = () => console.error('이미지를 찾을 수 없음:', img.src);
          });
        } catch (err) {
          console.warn('CORS 또는 로드 문제로 내부 요소 조작에 실패했습니다.');
        }
      };

      placeholder.style.display = 'none';
      viewer.style.display = 'block';
    });
  });
});
