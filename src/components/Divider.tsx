export function Divider(props: { fill: string }): JSX.Element {
  const { fill } = props;
  return (
    <div className=" h-[50vh] bg-white">
      <svg
        className="relative -bottom-0" width="100%" height="220" fill={fill}
      >
        <path
          d="M-0.751721 7.02574L23.2481 11.8847C47.2479 16.7436 95.2475 26.4614 143.238 45.8544C191.229 65.2473 239.212 94.3153 287.199 118.546C335.185 142.776 383.176 162.169 431.18 167.05C479.184 171.93 527.201 162.297 575.222 147.828C623.243 133.358 671.269 114.05 719.29 99.5802C767.311 85.1103 815.328 75.4779 863.34 70.6831C911.353 65.8883 959.361 65.931 1007.35 90.1615C1055.33 114.392 1103.3 162.81 1151.29 177.366C1199.29 191.921 1247.32 172.614 1295.36 133.956C1343.4 95.2982 1391.46 37.2903 1439.48 22.8204C1487.5 8.35047 1535.49 37.4185 1583.46 76.1616C1631.43 114.905 1679.4 163.323 1727.39 177.878C1775.39 192.434 1823.41 173.126 1871.44 148.981C1919.47 124.836 1967.51 95.8537 2015.5 110.409C2063.5 124.964 2111.45 183.058 2159.46 187.938C2207.46 192.818 2255.51 144.486 2303.52 144.528C2351.53 144.571 2399.5 192.989 2447.52 173.682C2495.55 154.374 2543.63 67.3412 2591.67 28.6835C2639.72 -9.97415 2687.72 -0.256311 2735.72 9.46152C2783.72 19.1794 2831.72 28.8972 2879.72 33.7775C2927.72 38.6578 2975.73 38.7005 3023.72 58.0934C3071.71 77.4864 3119.69 116.23 3167.7 111.435C3215.71 106.64 3263.76 58.3071 3311.79 34.1621C3359.82 10.0171 3407.83 10.0598 3431.84 10.0812L3455.84 10.1025L3455.61 271.33L3431.6 271.309C3407.6 271.288 3359.59 271.245 3311.58 271.202C3263.57 271.159 3215.57 271.117 3167.56 271.074C3119.55 271.031 3071.54 270.988 3023.53 270.946C2975.53 270.903 2927.52 270.86 2879.51 270.817C2831.5 270.775 2783.49 270.732 2735.48 270.689C2687.48 270.647 2639.47 270.604 2591.46 270.561C2543.45 270.518 2495.44 270.476 2447.43 270.433C2399.43 270.39 2351.42 270.347 2303.41 270.305C2255.4 270.262 2207.39 270.219 2159.39 270.176C2111.38 270.134 2063.37 270.091 2015.36 270.048C1967.35 270.006 1919.34 269.963 1871.34 269.92C1823.33 269.877 1775.32 269.835 1727.31 269.792C1679.3 269.749 1631.3 269.706 1583.29 269.664C1535.28 269.621 1487.27 269.578 1439.26 269.535C1391.25 269.493 1343.25 269.45 1295.24 269.407C1247.23 269.365 1199.22 269.322 1151.21 269.279C1103.2 269.236 1055.2 269.194 1007.19 269.151C959.18 269.108 911.172 269.065 863.164 269.023C815.155 268.98 767.147 268.937 719.139 268.894C671.131 268.852 623.123 268.809 575.114 268.766C527.106 268.724 479.098 268.681 431.09 268.638C383.082 268.595 335.073 268.553 287.065 268.51C239.057 268.467 191.049 268.424 143.04 268.382C95.0322 268.339 47.024 268.296 23.0199 268.275L-0.984245 268.253L-0.751721 7.02574Z"
          fill={fill}
        />
      </svg>
      <svg className="relative -top-10" width="100%" height="300" fill={fill}>
        <path
          d="M1439.34 258.361L1415.34 253.59C1391.35 248.82 1343.37 239.278 1295.41 220.307C1247.45 201.335 1199.52 172.934 1151.57 149.247C1103.62 125.561 1055.66 106.589 1007.67 101.763C959.673 96.9369 911.64 106.256 863.595 120.29C815.55 134.324 767.493 153.073 719.448 167.107C671.403 181.141 623.37 190.46 575.35 195.064C527.33 199.668 479.321 199.556 431.375 175.87C383.428 152.183 335.543 104.922 287.572 90.6652C239.601 76.4089 191.543 95.1579 143.437 132.767C95.3305 170.377 47.1747 226.846 -0.870253 240.88C-48.9153 254.914 -96.8496 226.513 -144.759 188.681C-192.669 150.849 -240.554 103.587 -288.525 89.331C-336.496 75.0747 -384.554 93.8237 -432.623 117.288C-480.693 140.752 -528.775 168.931 -576.746 154.675C-624.717 140.418 -672.578 83.7265 -720.574 78.9002C-768.569 74.074 -816.7 121.113 -864.709 121.002C-912.716 120.891 -960.602 73.6293 -1008.66 92.3783C-1056.72 111.127 -1104.95 195.887 -1153.05 233.497C-1201.16 271.106 -1249.14 261.565 -1297.13 252.023C-1345.11 242.482 -1393.09 232.941 -1441.09 228.115C-1489.08 223.288 -1537.09 223.177 -1585.05 204.206C-1633.01 185.234 -1680.92 147.403 -1728.94 152.006C-1776.96 156.61 -1825.09 203.65 -1873.16 227.114C-1921.23 250.578 -1969.24 250.467 -1993.24 250.411L-2017.25 250.356L-2016.58 -4.25777L-1992.58 -4.20218C-1968.57 -4.14659 -1920.57 -4.0354 -1872.56 -3.92422C-1824.55 -3.81304 -1776.54 -3.70185 -1728.53 -3.59067C-1680.53 -3.47948 -1632.52 -3.3683 -1584.51 -3.25712C-1536.5 -3.14593 -1488.49 -3.03475 -1440.49 -2.92357C-1392.48 -2.81238 -1344.47 -2.7012 -1296.46 -2.59001C-1248.45 -2.47883 -1200.45 -2.36765 -1152.44 -2.25646C-1104.43 -2.14528 -1056.42 -2.0341 -1008.41 -1.92291C-960.405 -1.81173 -912.397 -1.70054 -864.389 -1.58936C-816.381 -1.47818 -768.372 -1.36699 -720.365 -1.25581C-672.356 -1.14462 -624.348 -1.03344 -576.34 -0.922257C-528.332 -0.811074 -480.324 -0.69989 -432.316 -0.588706C-384.308 -0.477522 -336.3 -0.366339 -288.292 -0.255155C-240.283 -0.143971 -192.275 -0.0327873 -144.267 0.0783967C-96.2592 0.18958 -48.2511 0.300764 -0.242944 0.411948C47.7651 0.523132 95.7733 0.634316 143.781 0.745499C191.789 0.856683 239.798 0.967867 287.806 1.07905C335.814 1.19023 383.822 1.30142 431.83 1.4126C479.838 1.52379 527.846 1.63497 575.854 1.74615C623.862 1.85734 671.87 1.96852 719.878 2.0797C767.887 2.19089 815.895 2.30207 863.903 2.41326C911.911 2.52444 959.919 2.63562 1007.93 2.74681C1055.94 2.85799 1103.94 2.96917 1151.95 3.08036C1199.96 3.19154 1247.97 3.30273 1295.98 3.41391C1343.98 3.52509 1391.99 3.63628 1416 3.69187L1440 3.74746L1439.34 258.361Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
