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

      // 기존 active 제거/추가 로직
      menuLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');

      const filePath = link.getAttribute('data-file');
      viewer.src = 'viewer.html?file=' + filePath;

      viewer.onload = () => {
        // iframe 내부의 요소를 가져올 때 보안 오류가 날 수 있으므로 try-catch로 감싸는 것이 안전합니다.
        try {
          const iframeDoc = viewer.contentDocument || viewer.contentWindow.document;

          // 1. "목록으로" 버튼 숨기기
          const header = iframeDoc.querySelector('header') || iframeDoc.querySelector('.header') || iframeDoc.querySelector('.top-nav');
          if (header) {
            header.style.display = 'none';
          }

          // 2. 이미지 에러 체크 (콘솔 확인용)
          const images = iframeDoc.querySelectorAll('img');
          images.forEach((img) => {
            img.onerror = () => {
              console.error('이미지를 찾을 수 없음:', img.src);
            };
          });
        } catch (err) {
          console.warn('내부 요소를 숨기려 했으나, 보안 설정(CORS) 때문에 실패했습니다. 로컬 서버(Live Server)를 사용 중인지 확인하세요.');
        }
      };

      placeholder.style.display = 'none';
      viewer.style.display = 'block';
    });
  });
});
