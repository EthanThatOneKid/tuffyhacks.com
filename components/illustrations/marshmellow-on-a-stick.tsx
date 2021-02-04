import Illustration from '../illustration';

export default function TuffyCamper(props: Illustration['props']) {
  return (
    <Illustration {...props}>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 258 266"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 247.889L245.21 4.013c9.749-2.766 10.7.17 9.444 8.333L116.883 152.34c9.218.977 15.277.637 26.11 0 4.795 3.071 4.178 5.07 0 8.888-15.621 1.928-24.378 2.848-39.998 0L3 259v-11.111z"
          fill="#633"
          stroke="#513513"
          strokeWidth={5.555}
        />
        <path
          d="M205.35 31.399a4.444 4.444 0 01.403-6.063L224.865 7.47a4.445 4.445 0 016.419.365l17.866 20.983a4.445 4.445 0 01-.645 6.381l-20.983 16.412a4.444 4.444 0 01-6.176-.684L205.35 31.399z"
          fill="#EEEBEA"
          stroke="#513513"
          strokeWidth={3.333}
        />
        <g filter="url(#prefix__filter0_d)">
          <path
            d="M240.765 31.79c0 3.681-7.428 8.333-11.11 8.333-3.682 0-5.278-2.707-5.278-6.389 0-3.682 6.04-8.61 9.722-8.61a6.666 6.666 0 016.666 6.666z"
            fill="#C4C4C4"
            fillOpacity={0.02}
          />
        </g>
        <defs>
          <filter
            id="prefix__filter0_d"
            x={220.489}
            y={21.235}
            width={24.165}
            height={22.777}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation={1.944} />
            <feColorMatrix values="0 0 0 0 0.427451 0 0 0 0 0.345098 0 0 0 0 0.313726 0 0 0 0.8 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </Illustration>
  );
}
