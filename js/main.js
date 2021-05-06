$('textarea').autoResize();

// menu toggle
$('.menu-toggle').on('click', function () {
  $('.mobile-menu').toggleClass('open');

  // $(this).text($(this).html() == 'Menu' ? 'Close' : 'Menu');

  var src = $('#mobile-menu').attr('src');
  var newsrc =
    src == 'assets/burger.svg' ? 'assets/close.svg' : 'assets/burger.svg';
  $('#mobile-menu').attr('src', newsrc);

  return false;
});

//  slide animation

// to count which page we're on
let pageNumber = 0;

// content for the pages
const pages = [
  {
    heading:
      '<span lang="en">OKR</span> 수립과<br> 정렬<span lang="en">(alignment)</span>',
    paragraph:
      '조직간, 개인간 OKR을 연결할 수 있고, 진척도를 한 눈에 조회하고 관리할 수 있습니다. 팀 OKR 미팅, 스크럼(Scrum) 미팅에 효과적입니다',
    img: `<video width="441" height="390" autoplay muted loop>
            <source src="assets/screen_01.mp4" type="video/mp4">
          </video>`
  },
  {
    heading: '자연스러운 협업,<br> 실시간 리뷰와 소통',
    paragraph:
      'OKR 과정의 실행 내용이 실시간 피드(feed)로 공유됩니다. ‘좋아요’와 ‘댓글’을 통해 신속한 리뷰를 주고 받습니다. 소통과 협업에 효과적입니다.',
    img: '<img src="assets/screen_02.png" />'
  },
  {
    heading:
      '<span lang="en">OKR</span> 실행 관리<br> (프로젝트, 과제, 이니셔티브 등)',
    paragraph:
      '핵심결과(Key Results)를 위한 다양한 과제/이니셔티브를 설정하고 진행을 관리합니다. OKR 외에도 업무관리나 프로젝트 매니지먼트에 효과적입니다.',
    img: `<video width="441" height="300" autoplay muted loop>
            <source src="assets/screen_03.mp4" type="video/mp4">
          </video>`
  },
  {
    heading: '새로운 성과관리 문화,<br><span lang="en">CFR</span>',
    paragraph:
      '리더와 팀원, 누구와도 언제든지<br> 쉽고 자연스럽게 일대일 미팅해요',
    img: '<img src="assets/screen_04.png" />'
  },
  {
    heading: '상시 인정과<br> 격려<span lang="en">(Recognition)</span>',
    paragraph:
      '헤이 땡스(Hey-thanks)와 헤이 코인(Hey-coin)을 통해 언제든지 동료를 칭찬하고 감사를 표할 수 있습니다. 다양한 보/포상에까지 활용할 수 있어, 활발한 인정과 소통문화를 만드는데 매우 효과적입니다.',
    img: '<img src="assets/screen_05.png" />'
  }
];

//  pick the relevant tags
const nextArrow = document.querySelector('img.next');
const prevArrow = document.querySelector('img.prev');
const headingTag = document.querySelector('.slide-text h2');
const bodyTag = document.querySelector('.slide-text p');
const imgTag = document.querySelector('.slide-illustration');

const slideArea = document.querySelector('.slide');
const slideText = slideArea.querySelector('.slide-text');
const slideAnimation = slideArea.querySelector('.slide-illustration');

// 슬라이드 인디케이터
const indicatorParent = document.querySelector('.slide-indicator');
const indicators = document.querySelectorAll('.slide-indicator li');
index = 0;

// increase the pageNumber
const next = function () {
  pageNumber = pageNumber + 1;
  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }
  updateSection();

  // 인디케이터
  document
    .querySelector('.slide-indicator .selected')
    .classList.remove('selected');
  indicatorParent.children[pageNumber].classList.add('selected');
};

// decrease the updateSection
const previous = function () {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
  updateSection();

  // 인디케이터
  document
    .querySelector('.slide-indicator .selected')
    .classList.remove('selected');
  indicatorParent.children[pageNumber].classList.add('selected');
};

// 인디케이터 클릭시 변경
indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document
      .querySelector('.slide-indicator .selected')
      .classList.remove('selected');
    indicator.classList.add('selected');
    index = i;
    pageNumber = index;
    updateSection();
  });
});

// update the slide section
const updateSection = function () {
  headingTag.innerHTML = pages[pageNumber].heading;
  bodyTag.innerHTML = pages[pageNumber].paragraph;
  imgTag.innerHTML = pages[pageNumber].img;
  slideText.style.animation = 'fade 1s ease';
  slideAnimation.style.animation = 'fadeImage 1s ease';
};

// remove animation
const removeAnimation = function () {
  slideText.style.animation = '';
  slideAnimation.style.animation = '';
};

// on click of nextArrow, run this
nextArrow.addEventListener('click', function () {
  next();
  setTimeout(removeAnimation, 800);
});

// on click of prevArrow, run this
prevArrow.addEventListener('click', function () {
  previous();
  setTimeout(removeAnimation, 800);
});

// scroll to topa
const arrowTop = document.querySelector('img.top-arrow');

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// autoslide
// const autoSlide = setInterval(function () {
//   next();
// }, 4000);
