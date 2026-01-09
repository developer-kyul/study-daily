document.addEventListener('DOMContentLoaded', () => {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const menuLinks = document.querySelectorAll('.sub-menu a');
  const viewer = document.getElementById('md-viewer');
  const placeholder = document.getElementById('placeholder');

  // 1. 카테고리 아코디언 기능
  categoryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('collapsed');
    });
  });

  // 2. 메뉴 클릭 시 노트 불러오기
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // 활성화 표시 변경
      menuLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');

      // [핵심 수정] link 변수에서 data-file을 가져옵니다.
      const filePath = link.getAttribute('data-file');

      if (filePath) {
        // 한글 경로 인코딩 및 viewer 주소 설정
        const encodedPath = encodeURIComponent(filePath);
        viewer.src = `viewer.html?file=${encodedPath}`;

        placeholder.style.display = 'none';
        viewer.style.display = 'block';
      }

      // iframe 로드 후 내부 스타일 조정
      viewer.onload = () => {
        try {
          const iframeDoc = viewer.contentDocument || viewer.contentWindow.document;

          // 내부 "목록으로" 버튼 숨기기 (iframe 전용 뷰이므로)
          const header = iframeDoc.querySelector('.top') || iframeDoc.querySelector('.top-nav');
          if (header) header.style.display = 'none';
        } catch (err) {
          console.warn('Iframe 내부 요소에 접근할 수 없습니다 (CORS 또는 로딩 문제).');
        }
      };
    });
  });
});
