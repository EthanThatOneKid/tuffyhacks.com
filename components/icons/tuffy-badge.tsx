interface Props {
  width: number;
  height: number;
}

export default function TuffyBadge({ width = 512, height = 512 }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={256} cy={256} r={236.606} fill="#F5D2A5" stroke="#513513" strokeWidth={38.788} />
      <path
        d="M81.086 176.517l-5.836-4.32-14.036 24.681 5.836 4.32 5.063-8.901L93.7 208.273l3.912-6.878-21.588-15.977 5.062-8.901zM130.951 156.05l-12.834-15.6-4.734 5.069 7.985 9.705c.016 2.416-.616 3.972-1.569 4.993-.922.986-1.941 1.199-3.184-.31l-7.807-9.49-4.733 5.069 8.842 10.747c2.484 3.019 5.754 3.507 8.613.446 1.747-1.871 2.548-4.892 2.656-8.32l2.159 2.624 4.606-4.933zM147.793 98.846c-.915.346-1.961.84-3.075 1.603-5.259 3.606-5.971 8.802-3.107 14.238l1.953 3.706-1.488 6.401.455.865 3.571-2.448 6.877 13.054 5.681-3.895-6.877-13.054 4.492-3.08-2.538-4.818-4.492 3.08-1.692-3.212c-1.714-3.254-1.013-4.799.638-5.931.653-.448 1.289-.827 1.853-1.046l-2.251-5.463zM187.69 79.026c-.974.152-2.106.42-3.353.935-5.892 2.438-7.547 7.338-5.685 13.194l1.269 3.992-2.647 5.913.296.931 4-1.654 4.47 14.061 6.366-2.633-4.47-14.061 5.032-2.082-1.65-5.19-5.032 2.081-1.1-3.46c-1.114-3.504-.134-4.862 1.715-5.628.732-.302 1.434-.542 2.035-.64l-1.246-5.759zM236.98 81.413l-7.392 1.231-2.657 11.854-5.516-10.493-7.53 1.254 10.695 16.514-4.651 13.129 6.795-1.132 10.256-32.357zM290.278 103.947l3.177-33.97-7.855-.955-1.244 13.3-13.03-1.586 1.244-13.3-7.854-.956-3.177 33.969 7.854.956 1.275-13.624 13.029 1.585-1.274 13.625 7.855.956zM331.687 118.983l3.52-10.749c1.883-5.751-.114-10.08-6.452-12.781-1.798-.767-4.469-1.4-6.356-1.6l-.935 4.793c1.757.296 3.343.669 4.585 1.198 2.569 1.095 3.805 2.832 2.907 5.574l-.159.487c-1.01-1.237-2.064-2.19-4.077-3.048-4.324-1.843-7.662-.292-8.749 3.026-1.246 3.804.828 7.158 4.425 8.69 2.355 1.004 3.999.899 5.704.163l-.536 1.637 6.123 2.61zm-4.744-7.416c-.932.611-1.905.751-3.318.148-1.499-.638-2.151-1.924-1.688-3.34.435-1.327 1.981-1.727 3.394-1.124 1.199.511 1.783 1.112 2.322 2.148l-.71 2.168zM367.293 140.661l.83-5.061c-1.417-.121-2.899-.69-4.177-1.624-2.479-1.813-3.506-4.797-1.932-7.597 1.733-3.084 4.379-2.981 6.633-1.332 1.352.989 2.274 2.179 3.074 3.68l3.873-2.836c-.88-2.018-2.438-4.245-4.392-5.674-6.387-4.671-11.997-2.706-14.756 2.204-2.76 4.91-1.892 11.384 4.494 16.055 1.954 1.429 4.378 2.115 6.353 2.185zM398.918 176.471l1.479-14.306 11.728-1.039-5.296-6.127-9.798 1.508 14.874-16.733-4.505-5.212-22.667 25.5 4.505 5.212 6.092-6.854-1.709 11.924 5.297 6.127zM425.383 209.251c5.885-4.174-.283-12.209 1.805-13.69.57-.404 1.382-.073 2.028 1.112.824 1.513 1.323 3.878 1.392 6.323l4.826-1.383c-.106-2.417-.759-5.354-1.962-7.561-2.361-4.333-6.3-5.959-9.641-3.59-5.505 3.905.447 11.64-1.604 13.094-.645.458-1.435.168-2.214-1.263-.913-1.676-1.325-4.557-1.128-7.19l-5.071.933c-.111 3.082.457 6.249 2.06 9.192 2.383 4.373 6.244 6.338 9.509 4.023z"
        fill="#513513"
      />
      <path
        d="M157.594 243.046c0-.239-.027-.482-.08-.715-1.719-7.59-3.563-9.653-11.263-10.611-1.184-.148-2.344.404-3.03 1.38-4.153 5.907-8.14 10.934-10.874 17.269C71.423 360.086 53.528 396.827 14.342 419.336a3.285 3.285 0 00-1.603 2.209c-2.786 14.473.015 20.203 4.973 29.042a3.274 3.274 0 002.77 1.669c28.663.667 44.655-5.502 69.997-26.201 1.25-1.022 3.055-.99 4.328.003 5.782 4.507 9.738 5.137 16.004 5.19a3.25 3.25 0 001.332-.277c22.525-9.923 31.381-18.459 44.688-34.42a3.295 3.295 0 00.763-2.104V243.046zM353.737 254.22c0-.239.026-.482.079-.714 1.719-7.591 3.563-9.654 11.264-10.612 1.184-.147 2.343.404 3.029 1.38 4.153 5.907 8.14 10.935 10.874 17.269 60.925 109.717 78.819 146.458 118.005 168.967.824.474 1.424 1.276 1.604 2.209 2.786 14.474-.015 20.203-4.974 29.042a3.273 3.273 0 01-2.769 1.669c-28.663.667-44.655-5.501-69.998-26.201-1.25-1.022-3.054-.99-4.328.003-5.782 4.507-9.737 5.138-16.004 5.191a3.262 3.262 0 01-1.331-.278c-22.526-9.923-31.382-18.458-44.688-34.419a3.298 3.298 0 01-.763-2.105V254.22z"
        fill="#9E9B90"
      />
      <path
        d="M157.594 243.046c0-.239-.027-.482-.08-.715-1.719-7.59-3.563-9.653-11.263-10.611-1.184-.148-2.344.404-3.03 1.38-4.153 5.907-8.14 10.934-10.874 17.269C71.423 360.086 53.528 396.827 14.342 419.336a3.285 3.285 0 00-1.603 2.209c-2.786 14.473.015 20.203 4.973 29.042a3.274 3.274 0 002.77 1.669c28.663.667 44.655-5.502 69.997-26.201 1.25-1.022 3.055-.99 4.328.003 5.782 4.507 9.738 5.137 16.004 5.19a3.25 3.25 0 001.332-.277c22.525-9.923 31.381-18.459 44.688-34.42a3.295 3.295 0 00.763-2.104V243.046zM353.737 254.22c0-.239.026-.482.079-.714 1.719-7.591 3.563-9.654 11.264-10.612 1.184-.147 2.343.404 3.029 1.38 4.153 5.907 8.14 10.935 10.874 17.269 60.925 109.717 78.819 146.458 118.005 168.967.824.474 1.424 1.276 1.604 2.209 2.786 14.474-.015 20.203-4.974 29.042a3.273 3.273 0 01-2.769 1.669c-28.663.667-44.655-5.501-69.998-26.201-1.25-1.022-3.054-.99-4.328.003-5.782 4.507-9.737 5.138-16.004 5.191a3.262 3.262 0 01-1.331-.278c-22.526-9.923-31.382-18.458-44.688-34.419a3.298 3.298 0 01-.763-2.105V254.22z"
        stroke="#513513"
        strokeWidth={6.578}
      />
      <path
        d="M366.096 330.012c0 23.678-9.361 51.477-23.011 68.38-8.751 10.837-22.485 18.549-38.347 23.543-15.814 4.98-33.371 7.137-49.283 7.137-15.813 0-34.581-2.795-51.665-8.448-17.17-5.682-32.109-14.074-40.846-24.893-13.4-16.594-18.13-41.501-18.13-65.719 0-5.468-.182-11.163-.367-16.97-.371-11.621-.757-23.689.273-35.275 1.536-17.27 6.146-31.66 17.439-40.007 9.475-7.005 26.307-12.626 44.444-16.477 17.98-3.818 36.508-5.748 48.852-5.748 12.355 0 31.782 1.933 50.666 5.756 19.073 3.862 36.741 9.492 46.179 16.469 11.169 8.255 14.985 22.482 15.651 39.792.329 8.562-.12 17.568-.668 26.54-.078 1.285-.159 2.57-.239 3.854-.476 7.602-.948 15.143-.948 22.066z"
        fill="#9E9B90"
        stroke="#513513"
        strokeWidth={8.551}
      />
      <path
        d="M362.913 243.036c3.048 5.215 9.519 15.974 9.425 33.523 13.127-5.419 20.951-8.275 29.097-19.675.426-4.985.056-7.585-2.875-11.501-11.281-3.421-23.182-3.542-35.647-2.347zM140.135 278.305c-14.468-7.602-19.584-6.487-29.089-21.011-1.109-4.774-.711-7.434 1.643-11.911 13.433-4.684 23.716-3.219 37.223-1.3-2.284 4.555-8.351 12.681-9.777 34.222z"
        fill="#412A0F"
      />
      <path
        d="M362.913 243.036c3.048 5.215 9.519 15.974 9.425 33.523 13.127-5.419 20.951-8.275 29.097-19.675.426-4.985.056-7.585-2.875-11.501-11.281-3.421-23.182-3.542-35.647-2.347zM140.135 278.305c-14.468-7.602-19.584-6.487-29.089-21.011-1.109-4.774-.711-7.434 1.643-11.911 13.433-4.684 23.716-3.219 37.223-1.3-2.284 4.555-8.351 12.681-9.777 34.222z"
        stroke="#513513"
        strokeWidth={8.551}
      />
      <path
        d="M256.162 246.899a.677.677 0 00.564-.01c40.831-19.898 65.33-24.246 110.05-26.554a.665.665 0 01.302.055c15.818 6.946 22.583 12.642 30.687 24.084.372.526-.163 1.218-.771 1.003-10.395-3.692-17.119-3.888-28.726-2.978a.667.667 0 00-.197.047c-41.839 16.937-65.952 24.899-111.514 32.393a.683.683 0 01-.221-.001c-44.827-7.718-68.221-15.35-108.678-31.176a.67.67 0 00-.116-.034c-12.507-2.405-19.956-2.245-32.545.777-.612.147-1.07-.566-.672-1.055 8.758-10.766 15.279-16.217 29.43-23.051a.68.68 0 01.317-.066c49.426 2.029 73.152 9.188 112.09 26.566z"
        fill="#644117"
        stroke="#513513"
        strokeWidth={8.551}
      />
      <path
        d="M162.799 186.645c-2.549.549-14.93 21.776-17.662 32.86 45.046 2.073 69.45 8.888 111.309 27.521 40.798-18.206 65.144-24.674 110.488-27.521-4.69-12.898-8.315-20.023-17.251-32.45-39.615 3.308-60.22 8.249-93.237 24.235-32.771-15.422-52.571-21.892-93.647-24.645z"
        fill="#6AB032"
        stroke="#513513"
        strokeWidth={8.551}
      />
      <path
        d="M165.674 186.644c25.703-25.837 40.698-39.746 89.129-43.129 46.893 4.98 66.306 15.008 91.183 43.129-37.18 3.417-56.845 8.423-89.129 24.646-33.086-15.212-52.439-21.962-91.183-24.646z"
        fill="#644117"
        stroke="#513513"
        strokeWidth={8.551}
      />
      <path
        d="M305.994 300.62c3.463-18.875 6.325-26.599 14.441-28.459.451-.103.928-.098 1.362.063 4.285 1.586 5.284 7.982 3.81 29.826M177.496 302.715c3.464-18.875 6.326-26.599 14.442-28.459.451-.103.928-.098 1.362.063 4.285 1.586 5.283 7.982 3.81 29.826"
        stroke="#513513"
        strokeWidth={8.551}
        strokeLinecap="round"
      />
      <path
        d="M228.408 363.443c-.673 13.984 3.886 20.606 18.518 30.824 5.61 1.579 8.624 1.98 13.479.773 11.834-2.764 17.217-5.813 23.206-15.581l-55.203-16.016z"
        fill="#655D5D"
        stroke="#513513"
        strokeWidth={6.578}
      />
      <path
        d="M277.958 294.233c14.768 17.479 25.479 23.618 45.742 32.824 12.32 5.68 18.509 5.959 29.331 5.587l8.729-3.492c3.016-11.835 7.013-14.414 16.412-15.015 9.969.913 11.48 3.376 13.618 8.032-1.531 7.132-2.456 13.019-7.474 17.613-.464.425-.181 1.221.446 1.17 6.787-.551 11.364-3.918 16.455.073 9.674 5.487 3.665 10.184 1.397 15.015-3.948 5.394-7.465 7.764-16.062 10.826-39.388 5.672-61.153 7.667-99.865 10.825-39.549-3.595-50.433-8.523-62.502-19.206l53.773-64.252z"
        fill="#9E9B90"
        stroke="#513513"
        strokeWidth={8.551}
        strokeLinecap="round"
      />
      <path
        d="M339.515 344.411c-.136 7.637-1.094 11.79-3.464 19.097m-8.189-23.793c.703 9.798-.619 14.95-4.724 23.793m-8.503-27.237c-.326 10.809-2.09 16.763-7.244 27.237"
        stroke="#513513"
        strokeWidth={8.551}
        strokeLinecap="round"
      />
      <path
        d="M270.224 281.111l15.541 11.817-30.559 36.486-30.56 36.486-14.327-13.566 59.905-71.223z"
        fill="#9E9B90"
      />
    </svg>
  );
}