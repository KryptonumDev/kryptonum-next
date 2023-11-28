import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import CaseStudies from "@/app/components/sections/CaseStudies";
import LatestBlogEntries from "@/app/components/sections/LatestBlogEntries";
import AfterWork from "@/app/components/sections/teamMember/AfterWork";
import Benefits from "@/app/components/sections/teamMember/Benefits";
import Bio from "@/app/components/sections/teamMember/Bio";
import Hero from "@/app/components/sections/teamMember/Hero";
import Hobbies from "@/app/components/sections/teamMember/Hobbies";
import Inspirations from "@/app/components/sections/teamMember/Inspitations";
import Links from "@/app/components/sections/teamMember/Links";
import Skills from "@/app/components/sections/teamMember/Skills";
import Tools from "@/app/components/sections/teamMember/Tools";
import notFound from "@/app/not-found";
import fetchData from "@/utils/fetchData";
import styles from "./styles.module.scss";

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
		},
		allCaseStudies,
		blogEntries,
	} = await query(member);

	const filteredCaseStudiesByPerson = allCaseStudies.filter((node) =>
		node.content?.some((contentItem) => contentItem.people?.some((person) => person._id === _id)),
	);

	return (
		<div className={styles.wrapper}>
			<Hero
				name={name}
				cryptonym={cryptonym}
				img={img}
			/>
			<Bio data={bio} />
			<Skills data={skills} />
			<Tools data={tools} />
			<Benefits data={benefits} />
			{links.length >= 1 && <Links data={links} />}
			<AfterWork data={afterWork} />
			<Hobbies data={hobbies} />
			{inspirations.length >= 1 && <Inspirations data={inspirations} />}
			{filteredCaseStudiesByPerson.length >= 1 && (
				<CaseStudies
					heading="Mam swój **udział** w…"
					data={filteredCaseStudiesByPerson}
				/>
			)}
			{blogEntries.length >= 1 && (
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
	);
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
    scrollToText_TeamPerson: allTeamMember(sort: { _createdAt: ASC }) {
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

	if (!data.page) {
		notFound();
	}
	data.page = data.page[0];

	data.blogEntries = data.blogEntries.filter((entry) => {
		return entry.author.some((author) => author.slug.current == member);
	});

	return data;
};
