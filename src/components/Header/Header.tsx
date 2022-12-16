import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled aria-label="gig venues">
      <svg
        className="header-logo__small"
        width="31"
        height="27"
        viewBox="0 0 31 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.75208 22.198C3.79208 22.198 3.03008 21.994 2.46608 21.586C1.90208 21.178 1.49408 20.602 1.24208 19.858C1.00208 19.102 0.88208 18.214 0.88208 17.194V12.298C0.88208 11.254 1.00208 10.354 1.24208 9.598C1.48208 8.842 1.90208 8.266 2.50208 7.87C3.11408 7.462 3.95408 7.258 5.02208 7.258C6.01808 7.258 6.81008 7.426 7.39808 7.762C7.98608 8.098 8.40608 8.584 8.65808 9.22C8.92208 9.844 9.05408 10.606 9.05408 11.506V12.262H6.51608V11.434C6.51608 10.966 6.48008 10.564 6.40808 10.228C6.34808 9.892 6.21608 9.64 6.01208 9.472C5.82008 9.292 5.50208 9.202 5.05808 9.202C4.59008 9.202 4.24808 9.316 4.03208 9.544C3.82808 9.772 3.69608 10.072 3.63608 10.444C3.58808 10.816 3.56408 11.224 3.56408 11.668V17.77C3.56408 18.274 3.60608 18.712 3.69008 19.084C3.77408 19.456 3.93008 19.744 4.15808 19.948C4.38608 20.14 4.71008 20.236 5.13008 20.236C5.56208 20.236 5.89208 20.128 6.12008 19.912C6.34808 19.696 6.50408 19.396 6.58808 19.012C6.68408 18.628 6.73208 18.172 6.73208 17.644V16.276H5.16608V14.602H9.12608V22H7.41608L7.21808 20.56C7.02608 21.04 6.73208 21.436 6.33608 21.748C5.95208 22.048 5.42408 22.198 4.75208 22.198Z"
          fill="#F4F4F4"
        />
        <path
          d="M24.33 22L21.396 7.41998H23.754L25.68 17.734L27.48 7.41998H29.892L26.958 22H24.33Z"
          fill="#F4F4F4"
        />
        <path
          d="M21.8094 14.0865C21.7816 14.0122 21.7317 13.9481 21.6666 13.9029C21.6014 13.8576 21.5239 13.8334 21.4446 13.8333H16.7488L19.4574 8.567C19.488 8.5077 19.5029 8.4415 19.5006 8.37478C19.4982 8.30806 19.4787 8.24307 19.4439 8.18608C19.4091 8.1291 19.3602 8.08204 19.302 8.04944C19.2437 8.01685 19.178 7.99982 19.1113 8C19.018 8.00004 18.9279 8.03358 18.8573 8.0945L16.0001 10.562L10.3018 15.4834C10.2417 15.5352 10.1989 15.6042 10.1792 15.681C10.1595 15.7579 10.1637 15.8389 10.1913 15.9133C10.219 15.9876 10.2687 16.0518 10.3338 16.097C10.3989 16.1423 10.4764 16.1666 10.5557 16.1667H15.2515L12.5429 21.433C12.5122 21.4923 12.4974 21.5585 12.4997 21.6252C12.5021 21.6919 12.5216 21.7569 12.5564 21.8139C12.5912 21.8709 12.6401 21.918 12.6983 21.9506C12.7566 21.9832 12.8223 22.0002 12.889 22C12.9823 22 13.0724 21.9664 13.143 21.9055L16.0001 19.438L21.6985 14.5166C21.7587 14.4648 21.8016 14.3958 21.8214 14.3189C21.8412 14.242 21.837 14.1609 21.8094 14.0865Z"
          fill="#2FDBBC"
        />
      </svg>
      <svg
        className="header-logo__large"
        width="180"
        height="53"
        viewBox="0 0 210 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9659 50.9732C8.75054 50.9732 6.99208 50.5047 5.69054 49.5678C4.389 48.631 3.44746 47.3083 2.86593 45.5998C2.31208 43.8638 2.03516 41.8247 2.03516 39.4825V28.2398C2.03516 25.8425 2.31208 23.7758 2.86593 22.0398C3.41977 20.3038 4.389 18.9812 5.77362 18.0718C7.18593 17.1349 9.12439 16.6665 11.589 16.6665C13.8875 16.6665 15.7152 17.0523 17.0721 17.8238C18.429 18.5954 19.3982 19.7114 19.9798 21.1718C20.589 22.6047 20.8936 24.3545 20.8936 26.4212V28.1572H15.0367V26.2558C15.0367 25.1812 14.9536 24.2581 14.7875 23.4865C14.649 22.7149 14.3444 22.1363 13.8736 21.7505C13.4305 21.3372 12.6967 21.1305 11.6721 21.1305C10.5921 21.1305 9.80285 21.3923 9.30439 21.9158C8.83362 22.4394 8.529 23.1283 8.39054 23.9825C8.27977 24.8367 8.22439 25.7736 8.22439 26.7932V40.8052C8.22439 41.9625 8.32131 42.9683 8.51516 43.8225C8.709 44.6767 9.069 45.3381 9.59516 45.8065C10.1213 46.2474 10.869 46.4678 11.8382 46.4678C12.8352 46.4678 13.5967 46.2198 14.1228 45.7238C14.649 45.2278 15.009 44.5389 15.2028 43.6572C15.4244 42.7754 15.5352 41.7283 15.5352 40.5158V37.3745H11.9213V33.5305H21.0598V50.5185H17.1136L16.6567 47.2118C16.2136 48.3141 15.5352 49.2234 14.6213 49.9398C13.7352 50.6287 12.5167 50.9732 10.9659 50.9732ZM25.9029 50.5185V17.0385H31.9675V50.5185H25.9029ZM45.6083 50.9732C43.3929 50.9732 41.6345 50.5047 40.3329 49.5678C39.0314 48.631 38.0898 47.3083 37.5083 45.5998C36.9545 43.8638 36.6775 41.8247 36.6775 39.4825V28.2398C36.6775 25.8425 36.9545 23.7758 37.5083 22.0398C38.0622 20.3038 39.0314 18.9812 40.416 18.0718C41.8283 17.1349 43.7668 16.6665 46.2314 16.6665C48.5299 16.6665 50.3575 17.0523 51.7145 17.8238C53.0714 18.5954 54.0406 19.7114 54.6222 21.1718C55.2314 22.6047 55.536 24.3545 55.536 26.4212V28.1572H49.6791V26.2558C49.6791 25.1812 49.596 24.2581 49.4299 23.4865C49.2914 22.7149 48.9868 22.1363 48.516 21.7505C48.0729 21.3372 47.3391 21.1305 46.3145 21.1305C45.2345 21.1305 44.4452 21.3923 43.9468 21.9158C43.476 22.4394 43.1714 23.1283 43.0329 23.9825C42.9222 24.8367 42.8668 25.7736 42.8668 26.7932V40.8052C42.8668 41.9625 42.9637 42.9683 43.1575 43.8225C43.3514 44.6767 43.7114 45.3381 44.2375 45.8065C44.7637 46.2474 45.5114 46.4678 46.4806 46.4678C47.4775 46.4678 48.2391 46.2198 48.7652 45.7238C49.2914 45.2278 49.6514 44.5389 49.8452 43.6572C50.0668 42.7754 50.1775 41.7283 50.1775 40.5158V37.3745H46.5637V33.5305H55.7022V50.5185H51.756L51.2991 47.2118C50.856 48.3141 50.1775 49.2234 49.2637 49.9398C48.3775 50.6287 47.1591 50.9732 45.6083 50.9732Z"
          fill="#2FDBBC"
        />
        <path
          d="M93.0696 50.5185L86.2988 17.0385H91.7404L96.185 40.7225L100.339 17.0385H105.905L99.1342 50.5185H93.0696ZM109.337 50.5185V17.0385H123.46V21.3372H115.485V30.9678H121.757V35.2252H115.485V46.3025H123.543V50.5185H109.337ZM127.105 50.5185V17.0385H131.383L139.566 36.1345V17.0385H144.634V50.5185H140.563L132.338 30.5132V50.5185H127.105ZM158.961 50.9732C156.469 50.9732 154.531 50.5185 153.146 49.6092C151.761 48.6998 150.806 47.4047 150.28 45.7238C149.754 44.043 149.491 42.0314 149.491 39.6892V17.0385H155.472V40.3918C155.472 41.439 155.541 42.431 155.68 43.3678C155.818 44.2772 156.137 45.0212 156.635 45.5998C157.161 46.1509 157.937 46.4265 158.961 46.4265C160.041 46.4265 160.817 46.1509 161.288 45.5998C161.786 45.0212 162.104 44.2772 162.243 43.3678C162.409 42.431 162.492 41.439 162.492 40.3918V17.0385H168.432V39.6892C168.432 42.0314 168.169 44.043 167.643 45.7238C167.117 47.4047 166.161 48.6998 164.777 49.6092C163.42 50.5185 161.481 50.9732 158.961 50.9732ZM173.267 50.5185V17.0385H187.391V21.3372H179.415V30.9678H185.687V35.2252H179.415V46.3025H187.474V50.5185H173.267ZM199.509 50.9732C197.487 50.9732 195.798 50.5874 194.441 49.8158C193.084 49.0167 192.059 47.8594 191.367 46.3438C190.675 44.8283 190.287 42.9683 190.204 40.7638L195.479 39.7305C195.535 41.0256 195.687 42.1692 195.936 43.1612C196.213 44.1532 196.615 44.9247 197.141 45.4758C197.695 45.9994 198.415 46.2612 199.301 46.2612C200.298 46.2612 201.004 45.9718 201.419 45.3932C201.835 44.7869 202.043 44.0292 202.043 43.1198C202.043 41.6594 201.71 40.4607 201.046 39.5238C200.381 38.587 199.495 37.6501 198.387 36.7132L194.15 32.9932C192.959 31.9736 192.004 30.8438 191.284 29.6038C190.592 28.3363 190.246 26.7794 190.246 24.9332C190.246 22.2878 191.021 20.2487 192.572 18.8158C194.123 17.3829 196.241 16.6665 198.927 16.6665C200.506 16.6665 201.821 16.9145 202.873 17.4105C203.926 17.8789 204.756 18.5403 205.366 19.3945C206.003 20.2487 206.473 21.2269 206.778 22.3292C207.083 23.4038 207.276 24.5474 207.359 25.7598L202.126 26.6692C202.07 25.6221 201.946 24.6852 201.752 23.8585C201.586 23.0318 201.267 22.3843 200.796 21.9158C200.353 21.4474 199.689 21.2132 198.803 21.2132C197.889 21.2132 197.183 21.5163 196.684 22.1225C196.213 22.7012 195.978 23.4314 195.978 24.3132C195.978 25.4429 196.213 26.3798 196.684 27.1238C197.155 27.8403 197.833 28.5843 198.719 29.3558L202.915 33.0345C204.299 34.1918 205.476 35.5558 206.446 37.1265C207.443 38.6696 207.941 40.5434 207.941 42.7478C207.941 44.3461 207.581 45.7652 206.861 47.0052C206.169 48.2452 205.186 49.2234 203.912 49.9398C202.666 50.6287 201.198 50.9732 199.509 50.9732Z"
          fill="#F4F4F4"
        />
        <path
          d="M84.9443 32.3468C84.8801 32.1762 84.7649 32.029 84.6147 31.9252C84.4643 31.8211 84.2854 31.7656 84.1024 31.7653H73.2659L79.5166 19.6724C79.5872 19.5362 79.6216 19.3842 79.6163 19.231C79.6107 19.0778 79.5657 18.9285 79.4854 18.7977C79.4051 18.6668 79.2923 18.5588 79.1579 18.4839C79.0234 18.4091 78.8718 18.37 78.7179 18.3704C78.5026 18.3705 78.2946 18.4475 78.1317 18.5874L71.5382 24.2535L58.3883 35.5545C58.2496 35.6734 58.1508 35.8319 58.1053 36.0082C58.0599 36.1848 58.0696 36.3708 58.1333 36.5416C58.1972 36.7123 58.3119 36.8597 58.4621 36.9635C58.6123 37.0675 58.7912 37.1233 58.9742 37.1235H69.8106L63.56 49.2165C63.4892 49.3527 63.455 49.5047 63.4603 49.6579C63.4659 49.811 63.5109 49.9603 63.5912 50.0912C63.6715 50.2221 63.7843 50.3302 63.9186 50.4051C64.0532 50.4799 64.2048 50.519 64.3587 50.5185C64.574 50.5185 64.7819 50.4414 64.9449 50.3015L71.5382 44.6354L84.6883 33.3344C84.8273 33.2155 84.9263 33.057 84.972 32.8804C85.0176 32.7038 85.0079 32.5176 84.9443 32.3468Z"
          fill="#2FDBBC"
        />
      </svg>
    </HeaderStyled>
  );
};

export default Header;
