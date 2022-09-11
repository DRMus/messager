import React from "react";

function Emoji({className}) {
  return (
    <span className={className}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 2.9137C25.5558 2.9137 32.0863 9.44411 32.0863 17.4999C32.0863 25.5543 25.5558 32.0833 17.5 32.0833C9.44417 32.0847 2.91375 25.5543 2.91375 17.4999C2.91375 9.44411 9.44417 2.9137 17.5 2.9137ZM17.5 5.1012C15.8606 5.08342 14.2339 5.39097 12.7141 6.00605C11.1943 6.62113 9.81157 7.53154 8.64596 8.68456C7.48036 9.83759 6.55502 11.2103 5.92349 12.7234C5.29196 14.2364 4.96678 15.8597 4.96678 17.4992C4.96678 19.1388 5.29196 20.762 5.92349 22.2751C6.55502 23.7881 7.48036 25.1608 8.64596 26.3139C9.81157 27.4669 11.1943 28.3773 12.7141 28.9924C14.2339 29.6075 15.8606 29.915 17.5 29.8972C20.7649 29.8618 23.884 28.54 26.1802 26.2188C28.4764 23.8976 29.7643 20.7643 29.7643 17.4992C29.7643 14.2342 28.4764 11.1009 26.1802 8.77965C23.884 6.45841 20.7649 5.13661 17.5 5.1012V5.1012ZM12.3404 21.5585C12.9542 22.3398 13.7377 22.9713 14.6316 23.4051C15.5255 23.8389 16.5064 24.0637 17.5 24.0624C18.4925 24.0637 19.4723 23.8393 20.3654 23.4063C21.2585 22.9732 22.0415 22.3429 22.6552 21.5629C22.7443 21.4502 22.8546 21.3561 22.98 21.2861C23.1055 21.216 23.2434 21.1713 23.3861 21.1546C23.5288 21.1379 23.6733 21.1494 23.8115 21.1886C23.9497 21.2277 24.0789 21.2937 24.1916 21.3828C24.3043 21.4718 24.3983 21.5822 24.4684 21.7076C24.5384 21.833 24.5831 21.971 24.5998 22.1136C24.6165 22.2563 24.605 22.4009 24.5658 22.5391C24.5267 22.6773 24.4607 22.8064 24.3717 22.9191C23.5532 23.9583 22.5094 24.798 21.319 25.375C20.1287 25.952 18.8228 26.2512 17.5 26.2499C16.1755 26.251 14.868 25.9509 13.6766 25.3724C12.4851 24.7938 11.4407 23.9519 10.6225 22.9104C10.5298 22.798 10.4605 22.6682 10.4186 22.5286C10.3768 22.3891 10.3632 22.2425 10.3788 22.0977C10.3943 21.9528 10.4387 21.8125 10.5092 21.685C10.5797 21.5575 10.675 21.4454 10.7894 21.3553C10.9039 21.2651 11.0352 21.1987 11.1757 21.16C11.3161 21.1213 11.4629 21.111 11.6074 21.1298C11.7519 21.1486 11.8911 21.1961 12.017 21.2694C12.1429 21.3428 12.2528 21.4406 12.3404 21.557V21.5585ZM13.125 12.7604C13.3686 12.7535 13.6112 12.7955 13.8383 12.884C14.0654 12.9724 14.2724 13.1056 14.4472 13.2755C14.622 13.4453 14.7609 13.6485 14.8557 13.8731C14.9506 14.0976 14.9995 14.3388 14.9995 14.5826C14.9995 14.8263 14.9506 15.0675 14.8557 15.292C14.7609 15.5166 14.622 15.7198 14.4472 15.8896C14.2724 16.0595 14.0654 16.1927 13.8383 16.2811C13.6112 16.3696 13.3686 16.4116 13.125 16.4047C12.6507 16.3913 12.2002 16.1935 11.8695 15.8532C11.5387 15.5129 11.3536 15.0571 11.3536 14.5826C11.3536 14.108 11.5387 13.6522 11.8695 13.3119C12.2002 12.9716 12.6507 12.7738 13.125 12.7604ZM21.875 12.7604C22.1186 12.7535 22.3612 12.7955 22.5883 12.884C22.8154 12.9724 23.0224 13.1056 23.1972 13.2755C23.372 13.4453 23.5109 13.6485 23.6057 13.8731C23.7006 14.0976 23.7495 14.3388 23.7495 14.5826C23.7495 14.8263 23.7006 15.0675 23.6057 15.292C23.5109 15.5166 23.372 15.7198 23.1972 15.8896C23.0224 16.0595 22.8154 16.1927 22.5883 16.2811C22.3612 16.3696 22.1186 16.4116 21.875 16.4047C21.4007 16.3913 20.9502 16.1935 20.6195 15.8532C20.2887 15.5129 20.1036 15.0571 20.1036 14.5826C20.1036 14.108 20.2887 13.6522 20.6195 13.3119C20.9502 12.9716 21.4007 12.7738 21.875 12.7604V12.7604Z"
          fill="#CFCFCF"
        />
      </svg>
    </span>
  );
}

export default Emoji;
