type Props = {
  className?: string;
};
const EdviseLogo: React.FC<Props> = ({ className }) => (
  <button className={`h-[33px] w-[109px] object-contain ${className}`}>
    <svg
      width='108'
      height='34'
      viewBox='0 0 108 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='14.7115' cy='17' r='14.5123' fill='#124CCD' />
      <rect
        x='10.3281'
        y='11.0984'
        width='9.27686'
        height='2.92616'
        fill='white'
      />
      <rect
        width='9.27686'
        height='2.92616'
        transform='matrix(-1 0 0 1 19.6055 19.9747)'
        fill='white'
      />
      <rect
        x='7.80078'
        y='15.5366'
        width='8.85534'
        height='2.92616'
        fill='#90BEF9'
      />
      <path
        d='M38.4248 26V8.25076H49.7646V10.679H41.0009V15.6586H48.2855V18.0868H41.0009V23.5718H49.7646V26H38.4248ZM56.78 26.3698C55.5392 26.3698 54.4668 26.0616 53.5629 25.4453C52.6672 24.829 51.9729 23.9909 51.4799 22.9309C50.995 21.8626 50.7526 20.6629 50.7526 19.3317C50.7526 17.9923 50.9991 16.7967 51.4922 15.7449C51.9852 14.6849 52.6837 13.8508 53.5876 13.2427C54.4997 12.6264 55.5803 12.3183 56.8293 12.3183C58.0865 12.3183 59.1424 12.6264 59.997 13.2427C60.8598 13.8508 61.509 14.6849 61.9445 15.7449C62.3882 16.8049 62.6101 18.0005 62.6101 19.3317C62.6101 20.6629 62.3882 21.8585 61.9445 22.9185C61.5008 23.9786 60.8475 24.8208 59.9847 25.4453C59.1219 26.0616 58.0536 26.3698 56.78 26.3698ZM57.1374 24.0402C57.9838 24.0402 58.6741 23.8389 59.2082 23.4362C59.7423 23.0336 60.1326 22.4789 60.3791 21.7722C60.6256 21.0655 60.7489 20.252 60.7489 19.3317C60.7489 18.4114 60.6215 17.5979 60.3668 16.8912C60.1203 16.1845 59.7341 15.6339 59.2082 15.2395C58.6905 14.8451 58.029 14.6479 57.2237 14.6479C56.3691 14.6479 55.6665 14.8574 55.116 15.2765C54.5654 15.6956 54.1546 16.2585 53.8834 16.9651C53.6204 17.6718 53.489 18.4607 53.489 19.3317C53.489 20.211 53.6204 21.008 53.8834 21.7229C54.1546 22.4296 54.5572 22.9925 55.0913 23.4116C55.6337 23.8306 56.3157 24.0402 57.1374 24.0402ZM60.7489 26V16.4228H60.4531V8.25076H63.0415V26H60.7489ZM68.8568 26L64.0251 12.6881H66.6258L70.1634 22.7706L73.7009 12.6881H76.3016L71.4699 26H68.8568ZM77.5363 10.5064V8.00424H80.1124V10.5064H77.5363ZM77.5363 26V12.6881H80.1124V26H77.5363ZM87.6719 26.3575C86.0531 26.3575 84.7342 26 83.7153 25.2851C82.6963 24.5702 82.0718 23.5636 81.8417 22.2653L84.4795 21.8585C84.6438 22.5488 85.0218 23.0952 85.6134 23.4978C86.2133 23.8923 86.957 24.0895 87.8444 24.0895C88.6497 24.0895 89.2783 23.9251 89.7303 23.5965C90.1904 23.2678 90.4205 22.8158 90.4205 22.2406C90.4205 21.9037 90.3384 21.6325 90.174 21.4271C90.0179 21.2135 89.6851 21.0121 89.1756 20.8231C88.6661 20.6341 87.8896 20.3999 86.846 20.1206C85.7038 19.8247 84.7958 19.5084 84.122 19.1715C83.4564 18.8263 82.9798 18.4278 82.6922 17.9759C82.4128 17.5157 82.2731 16.961 82.2731 16.3119C82.2731 15.5066 82.4868 14.804 82.9141 14.2041C83.3414 13.6043 83.9412 13.14 84.7137 12.8113C85.4943 12.4826 86.4064 12.3183 87.45 12.3183C88.4689 12.3183 89.3769 12.4785 90.174 12.799C90.9711 13.1195 91.6161 13.5755 92.1092 14.1672C92.6022 14.7506 92.898 15.4367 92.9966 16.2256L90.3589 16.7063C90.2685 16.0654 89.9686 15.56 89.4591 15.1902C88.9496 14.8204 88.2882 14.6191 87.4746 14.5863C86.694 14.5534 86.0613 14.6849 85.5765 14.9807C85.0916 15.2683 84.8492 15.6668 84.8492 16.1763C84.8492 16.4721 84.9396 16.7227 85.1204 16.9282C85.3094 17.1336 85.671 17.3308 86.2051 17.5198C86.7392 17.7088 87.5281 17.9348 88.5717 18.1977C89.6892 18.4853 90.5767 18.8058 91.234 19.1591C91.8914 19.5043 92.3598 19.9192 92.6392 20.4041C92.9268 20.8807 93.0706 21.46 93.0706 22.142C93.0706 23.4568 92.5899 24.488 91.6285 25.2358C90.6753 25.9836 89.3564 26.3575 87.6719 26.3575ZM100.469 26.3698C99.1464 26.3698 97.9837 26.0822 96.9812 25.507C95.9869 24.9235 95.2103 24.1141 94.6516 23.0788C94.101 22.0352 93.8257 20.8272 93.8257 19.455C93.8257 18.0005 94.0969 16.7392 94.6392 15.6709C95.1898 14.6027 95.954 13.7769 96.9319 13.1934C97.9097 12.61 99.0478 12.3183 100.346 12.3183C101.702 12.3183 102.856 12.6347 103.81 13.2674C104.763 13.8919 105.474 14.7835 105.942 15.9421C106.419 17.1007 106.608 18.4771 106.509 20.0713H103.933V19.1345C103.917 17.5897 103.621 16.4475 103.045 15.7079C102.478 14.9684 101.612 14.5986 100.445 14.5986C99.1546 14.5986 98.185 15.0053 97.5358 15.8188C96.8867 16.6323 96.5621 17.8074 96.5621 19.344C96.5621 20.8067 96.8867 21.9407 97.5358 22.746C98.185 23.543 99.1218 23.9416 100.346 23.9416C101.151 23.9416 101.846 23.7608 102.429 23.3992C103.021 23.0295 103.481 22.5036 103.81 21.8215L106.336 22.6227C105.819 23.8142 105.034 24.7387 103.982 25.396C102.93 26.0452 101.759 26.3698 100.469 26.3698ZM95.7239 20.0713V18.0621H105.227V20.0713H95.7239Z'
        fill='#01050E'
      />
    </svg>
  </button>
);

export default EdviseLogo;
