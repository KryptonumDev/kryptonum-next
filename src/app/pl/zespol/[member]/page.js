import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import SEO from "@/components/global/Seo";
import CaseStudies from "@/components/sections/CaseStudies";
import LatestBlogEntries from "@/components/sections/LatestBlogEntries";
import ScrollToNext from "@/components/sections/ScrollToNext";
import AfterWork from "@/components/sections/teamMember/AfterWork";
import Benefits from "@/components/sections/teamMember/Benefits";
import Bio from "@/components/sections/teamMember/Bio";
import Hero from "@/components/sections/teamMember/Hero";
import Hobbies from "@/components/sections/teamMember/Hobbies";
import Inspirations from "@/components/sections/teamMember/Inspitations";
import Links from "@/components/sections/teamMember/Links";
import Skills from "@/components/sections/teamMember/Skills";
import Tools from "@/components/sections/teamMember/Tools";
import fetchData from "@/utils/fetchData";
import { removeMarkdown } from "@/utils/functions";
import styles from "./styles.module.scss";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const { allTeamMember } = await paramsQuery();
	return allTeamMember.map((member) => ({ member: member.slug.current }));
}

const truncateText = (text, limit = 140) => {
	text = removeMarkdown(text).replace(/[\r\n]+/gm, " ");
	if (text.length > limit) {
		text = text.slice(0, limit - 3) + "...";
	}
	return text;
};

export default async function TeamMemberPage({ params: { member } }) {
	const {
		page: {
			_id,
			name,
			cryptonym,
			img,
			bio,
			skills,
			tools,
			benefits,
			links,
			afterWork,
			hobbies,
			inspirations,
			email,
			scrollToNext,
		},
		allCaseStudies,
		blogEntries,
	} = await query(member);

	const filteredCaseStudiesByPerson = allCaseStudies.filter((node) =>
		node.content?.some((contentItem) => contentItem.people?.some((person) => person._id === _id)),
	);

	const breadcrumbs = [
		{
			name: "Zespół",
			link: "/pl/zespol",
		},
		{
			name: name,
			link: member,
		},
	];

	return (
		<>
			<main id="main">
				<div className={styles.wrapper}>
					<Breadcrumbs breadcrumbs={breadcrumbs} />
					<Hero
						name={name}
						cryptonym={cryptonym}
						img={img}
					/>
					<Bio data={bio} />
					<Skills data={skills} />
					<Tools data={tools} />
					<Benefits data={benefits} />
					{links?.length >= 1 && <Links data={links} />}
					<AfterWork data={afterWork} />
					<Hobbies data={hobbies} />
					{inspirations?.length >= 1 && <Inspirations data={inspirations} />}
					{filteredCaseStudiesByPerson?.length >= 1 && (
						<CaseStudies
							heading="Mam swój **udział** w…"
							data={filteredCaseStudiesByPerson}
						/>
					)}
					{blogEntries?.length >= 1 && (
						<LatestBlogEntries
							heading="Tutaj dzielę się **wiedzą**"
							data={blogEntries}
							smallEntry={true}
						/>
					)}
					{email && (
						<div className={styles.contact}>
							<DecorativeHeading type="h2">A może **pogadamy**?</DecorativeHeading>
							<p>
								<a href={`mailto:${email}`}>{email}</a>
							</p>
						</div>
					)}
				</div>
			</main>
			{scrollToNext && <ScrollToNext data={scrollToNext} />}
		</>
	);
}

export async function generateMetadata({ params: { member } }) {
	const {
		page: { name, cryptonym, bio },
	} = await query(member);
	return SEO({
		title: `${name} - ${cryptonym} w Kryptonum`,
		description: truncateText(bio),
		url: `/pl/zespol/${member}`,
	});
}

const query = async (member) => {
	const {
		body: { data },
	} = await fetchData(
		`
  query($member: String!) {
    page: allTeamMember(where: { slug: { current: { eq: $member } } }) {
      _id
      name
      cryptonym
      slug {
        current
      }
      img {
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
      bio
      skills
      tools {
        name
        img {
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
      benefits
      links {
        href
        text
        img {
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
      afterWork
      hobbies
      inspirations
      email
    }
    allCaseStudies: allCaseStudyEntries {
      name
      slug {
        current
      }
      img {
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
      content {
        ... on CaseStudyParticipated {
          people {
            _id
          }
        }
      }
    }
    blogEntries: allBlogEntries {
      title
      subtitle
      slug {
        current
      }
      author {
        name
        slug {
          current
        }
        img {
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
      categories {
        name
        slug {
          current
        }
      }
      contentRaw
      _createdAt
      img {
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
    scrollToNext_TeamPerson: allTeamMember(sort: { _createdAt: ASC }) {
      name
      cryptonym
      slug {
        current
      }
      img {
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
  }`,
		{
			member,
		},
	);
	data.page = data.page[0];
	if (!data.page) {
		notFound();
	}
	data.blogEntries = data.blogEntries.filter((entry) => {
		return entry.author.some((author) => author.slug.current == member);
	});

	const people = data?.scrollToNext_TeamPerson;
	const currentIndex = people.findIndex((item) => item.slug.current === data.page.slug.current);
	const nextPerson =
		currentIndex !== -1 && currentIndex < people.length - 1 ? people[currentIndex + 1] : people[0];
	if (nextPerson) {
		data.page.scrollToNext = {
			paragraph: "**Scrolluj**, by przejść do następnej osoby",
			title: "Następna osoba:",
			link: {
				person: {
					name: nextPerson.name,
					cryptonym: nextPerson.cryptonym,
					img: nextPerson.img,
				},
				href: `/pl/zespol/${nextPerson.slug.current}`,
			},
		};
	}
	return data;
};

const paramsQuery = async () => {
	const {
		body: { data },
	} = await fetchData(`
  query {
    allTeamMember {
      slug {
        current
      }
    }
  }`);
	return data;
};
