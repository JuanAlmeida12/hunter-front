import * as React from 'react';

function SvgA4(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#a4_svg__clip0)">
                <path
                    d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24s10.745 24 24 24 24-10.745 24-24z"
                    fill="#6F6FFB" stroke="white" stroke-width="4"
                />
                <path d="M13.5 31.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" fill="#68463C" />
                <path d="M13.5 30.75h12.75v18.653S23.518 51 19.875 51 13.5 48.392 13.5 48.392V30.75z" fill="#68463C" />
                <path
                    d="M26.25 40.401c0 4.24-.662 3.838-4.963 3.838s-6.285-3.437-6.285-7.677-.164-8.062 3.307-8.062c9.816.375 7.941 7.66 7.941 11.901z"
                    fill="#553329"
                />
                <path
                    d="M34.415 27.075c0 6.692 2.764 14.92-9.29 14.92-12.054 0-12.054-8.228-12.054-14.92-1.82-7.95-1.446-17.325 10.93-17.325 12.374 0 10.414 10.633 10.414 17.325z"
                    fill="#836055"
                />
                <path d="M28.5 30.75h-.75a.75.75 0 000 1.5h.75a.75.75 0 000-1.5z" fill="#68463C" />
                <path
                    d="M28.5 45H12a6.75 6.75 0 00-6.75 6.75v3.75A6.75 6.75 0 0012 62.25h16.5a6.75 6.75 0 006.75-6.75v-3.75A6.75 6.75 0 0028.5 45z"
                    fill="#E05A33"
                />
                <path
                    d="M15.505 21.165v4.514c0 .571-.505 1.321-.88 1.696s-1.5 1.125-2.137 1.125c-.636 0-2.655-.338-3.62-1.693-.965-1.354-.67-8.491 0-10.155.67-1.663 3.137-5.166 6.638-7.839 2.535-1.936 5.748-3.537 9.653-4.008 18.705-2.258 11.755 10.934 9.341 14.32-4.125-1.5-7.125-1.875-12.538-1.139-5.412.738-6.012 1.487-6.457 3.18v-.001z"
                    fill="#1B0B47"
                />
                <path
                    d="M21.697 34.5a.75.75 0 01.75-.75h6.857a.75.75 0 01.75.75 3.75 3.75 0 01-3.75 3.75h-.857a3.75 3.75 0 01-3.75-3.75z"
                    fill="#66253C"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.566 38.032a3.741 3.741 0 01-1.262.218h-.857a3.75 3.75 0 01-3.747-3.6c.573-.215 1.423-.19 2.262-.165.268.008.533.015.788.015 1.657 0 3 1.175 3 2.625 0 .319-.065.625-.184.907z"
                    fill="#B03E67"
                />
                <path d="M22.5 33.75H30v.75a.75.75 0 01-.75.75h-6a.75.75 0 01-.75-.75v-.75z" fill="#fff" />
                <path
                    d="M24 33.975a.225.225 0 01.225-.225h1.05a.225.225 0 01.225.225v1.8a.225.225 0 01-.225.225h-1.05a.225.225 0 01-.225-.225v-1.8z"
                    fill="#B03E67"
                />
                <path
                    d="M22.5 28.125a1.125 1.125 0 112.25 0v.92a.205.205 0 01-.205.205h-1.84a.205.205 0 01-.205-.205v-.92zm7.5 0a1.125 1.125 0 112.25 0v.92a.205.205 0 01-.205.205h-1.84a.205.205 0 01-.205-.205v-.92z"
                    fill="#1B0B47"
                />
                <path
                    d="M22.702 30.404a3.202 3.202 0 100-6.404 3.202 3.202 0 000 6.404zM33.202 30.404a3.202 3.202 0 100-6.404 3.202 3.202 0 000 6.404zM25.489 26.328l5.25-.078"
                    stroke="#fff"
                    strokeWidth={2}
                />
                <path d="M21 34.5a2.25 2.25 0 012.25-2.25H30a2.25 2.25 0 012.25 2.25H21z" fill="#1B0B47" />
            </g>
            <defs>
                <clipPath id="a4_svg__clip0">
                    <rect width={48} height={48} rx={24} fill="#fff" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default SvgA4;