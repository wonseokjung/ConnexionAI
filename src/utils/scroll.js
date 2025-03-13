/**
 * 스크롤 관련 유틸리티 함수
 */

/**
 * 특정 요소로 부드럽게 스크롤하는 함수
 * @param {string|HTMLElement} target - 스크롤할 대상 요소 또는 selector
 * @param {number} offset - 스크롤 위치에 적용할 offset (px 단위, 기본값: 0)
 * @param {number} duration - 스크롤 애니메이션 지속 시간 (ms 단위, 기본값: 1000)
 */
export const scrollToElement = (target, offset = 0, duration = 1000) => {
  let targetElement;
  
  if (typeof target === 'string') {
    targetElement = document.querySelector(target);
  } else if (target instanceof HTMLElement) {
    targetElement = target;
  } else {
    console.error('Invalid target element');
    return;
  }
  
  if (!targetElement) {
    console.error('Target element not found');
    return;
  }
  
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeInOutCubic = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    
    window.scrollTo(0, startPosition + distance * easeInOutCubic);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };
  
  requestAnimationFrame(animation);
};

/**
 * 현재 스크롤 위치에 따라 요소의 가시성을 조절하는 함수
 * @param {HTMLElement} element - 대상 요소
 * @param {number} threshold - 요소가 보이기 시작할 스크롤 위치의 임계값 (px)
 * @param {string} visibleClass - 요소가 보일 때 추가할 클래스명
 * @param {string} hiddenClass - 요소가 숨겨질 때 추가할 클래스명
 */
export const toggleElementVisibility = (element, threshold, visibleClass, hiddenClass) => {
  if (!element) return;
  
  if (window.pageYOffset > threshold) {
    element.classList.add(visibleClass);
    element.classList.remove(hiddenClass);
  } else {
    element.classList.remove(visibleClass);
    element.classList.add(hiddenClass);
  }
};

/**
 * 스크롤 위치에 따라 특정 요소에 활성 클래스를 추가하는 함수
 * @param {NodeList|Array} elements - 섹션 요소들의 NodeList 또는 배열
 * @param {NodeList|Array} navItems - 네비게이션 항목들의 NodeList 또는 배열
 * @param {string} activeClass - 활성 상태를 나타내는 클래스명
 * @param {number} offset - 섹션 상단에서의 오프셋 (px, 기본값: 100)
 */
export const highlightNavOnScroll = (elements, navItems, activeClass, offset = 100) => {
  if (!elements || !navItems) return;
  
  const scrollPosition = window.pageYOffset + offset;
  
  elements.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      navItems.forEach(item => item.classList.remove(activeClass));
      navItems[index].classList.add(activeClass);
    }
  });
};

/**
 * 무한 스크롤 기능을 구현하는 함수
 * @param {Function} callback - 추가 데이터를 로드할 때 호출할 콜백 함수
 * @param {number} threshold - 스크롤이 화면 하단에서부터의 거리 (px, 기본값: 200)
 */
export const setupInfiniteScroll = (callback, threshold = 200) => {
  if (!callback || typeof callback !== 'function') {
    console.error('Invalid callback function');
    return;
  }
  
  let isLoading = false;
  
  const handleScroll = () => {
    if (isLoading) return;
    
    const scrollPosition = window.innerHeight + window.pageYOffset;
    const bodyHeight = document.body.offsetHeight;
    
    if (bodyHeight - scrollPosition < threshold) {
      isLoading = true;
      
      // 콜백 함수 호출 및 로딩 상태 리셋
      callback().finally(() => {
        isLoading = false;
      });
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // 초기에도 한 번 체크 (페이지가 짧은 경우를 위함)
  handleScroll();
  
  // 클린업 함수 반환
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

/**
 * 페럴랙스 스크롤 효과를 적용하는 함수
 * @param {HTMLElement} element - 페럴랙스 효과를 적용할 요소
 * @param {number} speed - 페럴랙스 효과의 속도 (양수는 느리게, 음수는 빠르게 움직임)
 */
export const applyParallaxEffect = (element, speed) => {
  if (!element) return;
  
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const translateY = scrollPosition * speed;
    
    element.style.transform = `translateY(${translateY}px)`;
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // 초기 적용
  handleScroll();
  
  // 클린업 함수 반환
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

export default {
  scrollToElement,
  toggleElementVisibility,
  highlightNavOnScroll,
  setupInfiniteScroll,
  applyParallaxEffect,
}; 