import fetchData from '@/utils/fetchData';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';
import HeaderWrapper from './header';
import { removeMarkdown } from '@/utils/functions';

const Header = async () => {
  const {
    WebDevelopment,
    WebDevelopment_Websites,
    WebDevelopment_Apps,
    WebDevelopment_Ecom,
    Marketing,
    GovernmentsMarketing,
    Workshops,
    AgencyCare,
    GraphicsDesign,
    GraphicsDesign_Logo,
    GraphicsDesign_Audits,
    GraphicsDesign_VisualIdentity,
    GraphicsDesign_Branding,
    GraphicsDesign_Ui,
    GraphicsDesign_Ux,
		global: { nav_BlogPost, nav_Curiousities },
    latestBlogEntry: [latestBlogEntry],
    latestCuriositiesEntries,
  } = await query();
	let {
		teamMembers,
		global: { nav_Projects },
	} = await query();

  let blogPost = nav_BlogPost || latestBlogEntry;
	blogPost = {
		...blogPost,
		title: removeMarkdown(blogPost.title),
		img: <Img data={blogPost.img} sizes='300px' />,
	}
	nav_Projects = nav_Projects.map(({ name, slug: { current: slug }, img }) => ({
		img: <Img data={img} sizes='300px' />,
		name,
		slug
	}));
	teamMembers = teamMembers.map(({ name, slug: { current: slug }, img }) => ({
		img: <Img data={img} width={78} height={78} sizes='78px' className='personBorder' />,
		name,
		slug
	}));
  let curiositiesEntries = nav_Curiousities || latestCuriositiesEntries;
	curiositiesEntries =  curiositiesEntries.map(({ title, slug: { current: slug }, img }) => ({
		img: <Img data={img} sizes='112px' />,
		title: removeMarkdown(title),
		slug
	}));
  const servicesImages = [
    WebDevelopment.img,
    WebDevelopment_Websites.img,
    WebDevelopment_Apps.img,
    WebDevelopment_Ecom.img,
    Marketing.hero.img,
    GovernmentsMarketing.hero_Img,
    Workshops.img,
    AgencyCare.img,
    GraphicsDesign.img,
    GraphicsDesign_Logo.img,
    GraphicsDesign_Audits.img,
    GraphicsDesign_VisualIdentity.img,
    GraphicsDesign_Branding.hero.img,
    GraphicsDesign_Ui.hero.img,
    GraphicsDesign_Ux.hero.img,
  ].map((img, i) => <Img key={i} data={img} sizes='500px' />);

  return (
    <>
      <a
        href='#main'
        className={styles.skipToMainContent}
      >
        Przejdź do głównej treści
      </a>
      <HeaderWrapper
				KryptonumLogo={KryptonumLogo}
				ChevronDown={ChevronDown}
				servicesImages={servicesImages}
				blogPost={blogPost}
				nav_Projects={nav_Projects}
				teamMembers={teamMembers}
				curiositiesEntries={curiositiesEntries}
				BackBtnIcon={BackBtnIcon}
			/>
    </>
  );
};

export default Header;

const assetFragment = `
  asset {
    altText
    url
    metadata {
      lqip
      dimensions {
        height
        width
      }
    }
  }
`;

const query = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
			WebDevelopment: WebDevelopment(id: "webDevelopment") {
        img: hero_Img { ${assetFragment} }
			}
			WebDevelopment_Websites: WebDevelopmentSite(id: "webDevelopment_Site") {
        img: hero_Img { ${assetFragment} }
			}
			WebDevelopment_Apps: WebDevelopmentPwa(id: "webDevelopment_Pwa") {
        img: hero_Img { ${assetFragment} }
			}
			WebDevelopment_Ecom: WebDevelopmentEcom(id: "webDevelopment_Ecom") {
        img: hero_Img { ${assetFragment} }
			}
			Marketing: Marketing360Page(id: "marketing360Page") {
        hero {
          img: image { ${assetFragment} }
				}
			}
      GovernmentsMarketing: LandingPage(id: "b5279f73-dea7-42a7-90b7-26e0a7e90c83"){
        hero_Img {
          asset {
            altText
            url
            metadata {
              lqip
              dimensions {
                height
                width
              }
            }
          }
        }
      }
			Workshops: Workshop(id: "workshop") {
        img: hero_Img { ${assetFragment} }
			}
			AgencyCare: Agency(id: "agency") {
        img: hero_Img { ${assetFragment} }
			}
			GraphicsDesign: GraphicsDesign(id: "graphics-design") {
        img: hero_Img { ${assetFragment} }
			}
			GraphicsDesign_Logo: GraphicsDesignLogo(id: "graphicsDesign_Logo") {
        img: hero_Img { ${assetFragment} }
			}
			GraphicsDesign_Audits: Audits(id: "audits") {
        img: hero_Img { ${assetFragment} }
			}
			GraphicsDesign_VisualIdentity: VisualIdentity(id: "visual-identity") {
        img: hero_Img { ${assetFragment} }
			}
			GraphicsDesign_Branding: BrandingPage(id: "brandingPage") {
        hero {
          img: sideImage { ${assetFragment} }
        }
			}
			GraphicsDesign_Ui: UiDesignPage(id: "uiDesignPage") {
        hero {
          img: image { ${assetFragment} }
        }
			}
			GraphicsDesign_Ux: UxDesignPage(id: "uxDesignPage") {
        hero {
          img: image { ${assetFragment} }
        }
			}
      global: Global(id: "global") {
				nav_Projects {
					name
					slug {
						current
					}
					img { ${assetFragment} }
				}
				nav_BlogPost {
					title
					slug {
						current
					}
					img { ${assetFragment} }
				}
				nav_Curiousities {
					title
					slug {
						current
					}
					img { ${assetFragment} }
				}
      }
      teamMembers: allTeamMember(sort: { _createdAt: ASC }) {
        name
        slug {
          current
        }
        img { ${assetFragment} }
      }
      latestBlogEntry: allBlogEntries(limit: 1, sort: { _createdAt: DESC }) {
        title
				slug {
					current
				}
				img { ${assetFragment} }
      }
      latestCuriositiesEntries: allCuriosityEntries(limit: 2, sort: { _createdAt: DESC }) {
        title
				slug {
					current
				}
				img { ${assetFragment} }
      }
		}
  `);
  return data;
};

const KryptonumLogo = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='150'
    height='32'
    viewBox='0 0 150 32'
    fill='none'
  >
    <path
      fill='url(#KryptonumLogo)'
      d='M20.762 16a5.88 5.88 0 01-1.039 3.327 6.3 6.3 0 01-2.776 2.24v10.218h-5.088v-10.22a6.294 6.294 0 01-2.777-2.24 5.874 5.874 0 01-1.039-3.324 5.87 5.87 0 011.039-3.325 6.293 6.293 0 012.777-2.24V.217h5.088v10.218a6.296 6.296 0 012.777 2.24 5.877 5.877 0 011.038 3.327z'
    ></path>
    <path
      fill='url(#KryptonumLogo)'
      d='M29.894 0v7.285l-5.313 5.072-2.543-2.428-1.638 1.563a7.519 7.519 0 00-1.273-1.215L29.894 0z'
    ></path>
    <path
      fill='url(#KryptonumLogo)'
      d='M24.581 19.643l5.314 5.072v7.286L19.129 21.724c.472-.356.9-.764 1.272-1.214l1.637 1.562 2.543-2.429z'
    ></path>
    <path
      fill='currentColor'
      d='M6.772 16a7.037 7.037 0 001.636 4.507l-6.724 6.42v-7.284l2.544-2.428v-2.429l-2.544-2.428V5.073l6.724 6.42A7.036 7.036 0 006.772 16zm40.268 7.5l-6.122-6.784V23.5h-1.941V8.63h1.941v6.891l6.144-6.89h2.453l-6.741 7.445 6.805 7.424h-2.538zm5.796-9.792a3.744 3.744 0 011.45-1.557c.64-.37 1.415-.555 2.325-.555v2.005H56.1c-2.177 0-3.264 1.18-3.264 3.542V23.5h-1.942V11.81h1.942v1.898zm15.873-1.899l-7.04 17.195h-2.006l2.304-5.632-4.715-11.563h2.155l3.67 9.472 3.626-9.472h2.005zm3.039 2.155c.384-.668.953-1.223 1.707-1.664.768-.455 1.657-.683 2.666-.683 1.038 0 1.977.25 2.816.747.854.498 1.522 1.202 2.006 2.112.483.896.725 1.941.725 3.136 0 1.18-.242 2.233-.725 3.157-.484.925-1.152 1.643-2.006 2.155-.839.512-1.778.768-2.816.768-.995 0-1.877-.22-2.645-.661-.754-.455-1.33-1.017-1.728-1.686v7.702h-1.941V11.809h1.941v2.155zm7.936 3.648c0-.882-.178-1.65-.533-2.304a3.672 3.672 0 00-1.451-1.493 3.927 3.927 0 00-1.984-.512 3.88 3.88 0 00-1.984.533c-.597.341-1.08.846-1.45 1.515-.356.654-.534 1.415-.534 2.282 0 .882.178 1.657.533 2.326.37.654.854 1.159 1.451 1.514a4.004 4.004 0 001.984.512c.725 0 1.387-.17 1.984-.512a3.819 3.819 0 001.45-1.514c.356-.669.534-1.451.534-2.347zm5.84-4.203V20.3c0 .569.121.974.363 1.216.242.228.662.341 1.259.341h1.43V23.5h-1.75c-1.08 0-1.892-.249-2.432-.747-.54-.497-.81-1.315-.81-2.453v-6.89h-1.515v-1.6h1.514V8.864h1.942v2.944h3.05v1.6h-3.05zm9.649 10.283c-1.095 0-2.09-.249-2.987-.747a5.426 5.426 0 01-2.09-2.112c-.498-.924-.747-1.99-.747-3.2 0-1.194.256-2.247.768-3.157.526-.924 1.237-1.628 2.133-2.112.896-.498 1.899-.747 3.008-.747 1.11 0 2.112.25 3.008.747a5.24 5.24 0 012.112 2.09c.526.91.789 1.97.789 3.18 0 1.208-.27 2.275-.81 3.2a5.493 5.493 0 01-2.155 2.111c-.91.498-1.92.747-3.03.747zm0-1.707a4.1 4.1 0 001.962-.49c.612-.327 1.103-.818 1.472-1.472.385-.655.576-1.451.576-2.39 0-.938-.184-1.735-.554-2.389-.37-.654-.854-1.138-1.45-1.45a3.978 3.978 0 00-1.942-.491c-.711 0-1.365.163-1.963.49-.583.313-1.052.797-1.408 1.451-.355.654-.533 1.45-.533 2.39 0 .952.17 1.756.512 2.41.355.654.825 1.145 1.408 1.472.583.313 1.223.47 1.92.47zm13.39-10.389c1.422 0 2.574.434 3.456 1.301.881.854 1.322 2.091 1.322 3.712V23.5h-1.92v-6.613c0-1.167-.291-2.055-.874-2.667-.583-.626-1.38-.939-2.39-.939-1.024 0-1.841.32-2.453.96-.597.64-.896 1.572-.896 2.795V23.5h-1.941V11.81h1.941v1.663a3.87 3.87 0 011.557-1.386 4.934 4.934 0 012.198-.491zm17.464.213V23.5h-1.941v-1.728a3.837 3.837 0 01-1.558 1.408c-.654.327-1.379.49-2.176.49-.91 0-1.728-.184-2.453-.554-.725-.384-1.301-.953-1.728-1.707-.412-.753-.619-1.67-.619-2.752V11.81h1.92v6.592c0 1.152.292 2.041.875 2.667.583.612 1.38.917 2.389.917 1.039 0 1.856-.32 2.454-.96.597-.64.896-1.571.896-2.794V11.81h1.941zm16.483-.213c.911 0 1.721.192 2.432.576.711.37 1.273.932 1.686 1.685.412.754.618 1.671.618 2.752V23.5h-1.92v-6.613c0-1.167-.291-2.055-.874-2.667-.569-.626-1.344-.939-2.326-.939-1.009 0-1.813.327-2.41.982-.598.64-.896 1.571-.896 2.794V23.5h-1.92v-6.613c0-1.167-.292-2.055-.875-2.667-.569-.626-1.344-.939-2.325-.939-1.01 0-1.814.327-2.411.982-.597.64-.896 1.571-.896 2.794V23.5h-1.941V11.81h1.941v1.685a3.853 3.853 0 011.536-1.408 4.748 4.748 0 012.155-.491c.981 0 1.849.22 2.602.661.754.441 1.316 1.088 1.686 1.942a3.832 3.832 0 011.621-1.92 4.777 4.777 0 012.517-.683z'
    ></path>
    <defs>
      <linearGradient
        id='KryptonumLogo'
        x1='20.524'
        x2='7.242'
        y1='0.216'
        y2='0.557'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282'></stop>
        <stop
          offset='1'
          stopColor='#90F4E8'
        ></stop>
      </linearGradient>
    </defs>
  </svg>
);
const ChevronDown = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    stroke='url(#ChevronDown)'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M4.664 6l4 4 4-4'
    ></path>
    <defs>
      <linearGradient
        id='ChevronDown'
        x1='12.514'
        x2='4.288'
        y1='6'
        y2='7.048'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282'></stop>
        <stop
          offset='1'
          stopColor='#90F4E8'
        ></stop>
      </linearGradient>
    </defs>
  </svg>
);
const BackBtnIcon = (
	<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none'>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.5'
			d='M12.5 4.167L7.5 10l5 5.833'
		></path>
	</svg>
)