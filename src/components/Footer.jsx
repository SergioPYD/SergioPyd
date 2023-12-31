export default function Footer() {
  return (
    <>
      <div>
      <hr className="mt-10 mb-10 dividerOne"/>
      </div>
      <div className="flex flex-row justify-center" style={{ marginTop: "80px", marginBottom: "20px" }}>
        <div className="flex flex-col items-center gap-2">
          <b className="text-small text-default-500">SERGIO PUYOD</b>
          <div className="flex flex-row gap-2">
            <a href="https://www.linkedin.com/in/sergio-puyod/" target="_blank">
              <svg
                width="30"
                height="30"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <rect width="256" height="256" fill="#fff" rx="60" />
                  <rect width="256" height="256" fill="#0A66C2" rx="60" />
                  <path
                    fill="#fff"
                    d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                  />
                </g>
              </svg>
            </a>
            <a href="https://github.com/SergioPYD" target="_blank">
              <svg
                width="30"
                height="30"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#0789c5"
                  fillRule="evenodd"
                  d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </>
  );
}
