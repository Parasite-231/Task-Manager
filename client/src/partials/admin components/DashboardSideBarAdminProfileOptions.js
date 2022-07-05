export default function DashboardSideBarAdminProfileOptions({
  svgLink,
  svgPath,
  linkText,
}) {
  return (
    <>
      <li>
        <a className="dropdown-item" href="#">
          <svg
            xmlns={svgLink}
            viewBox="0 0 24 24"
            width="23"
            height="25"
            fill="none"
            stroke="#ffffff"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            &lt;!--! Atomicons Free 1.00 by @atisalab License -
            https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021
            Atomicons --&gt;<circle cx="12" cy="12" r="3"></circle>
            <path d={svgPath}></path>
          </svg>
          &nbsp;&nbsp;{linkText}
        </a>
      </li>
    </>
  );
}
