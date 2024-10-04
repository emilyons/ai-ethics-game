import React from "react";
import "./ResourcesPage.scss";

const ResourcesPage = () => {
  const resources = [
    {
      title: "AI ethics are ignoring children, say Oxford researchers",
      url: "https://www.ox.ac.uk/news/2024-03-21-ai-ethics-are-ignoring-children-say-oxford-researchers",
      description: "Research highlighting the importance of considering children in AI ethics discussions."
    },
    {
      title: "Teacher Perspectives on How To Train Your Robot: A Middle School AI and Ethics Curriculum",
      url: "https://ojs.aaai.org/index.php/AAAI/article/view/17847",
      description: "A curriculum guide for teaching AI ethics to middle school students."
    },
    {
      title: "Explainable Artificial Intelligence for Kids",
      url: "https://www.atlantis-press.com/proceedings/eusflat-19/125914791",
      description: "A resource for making AI concepts understandable for children."
    },
    {
      title: "Co-designing inclusive and equitable intelligent systems with and for kids around the world",
      url: "https://jods.mitpress.mit.edu/pub/3yi7jnz9/release/1",
      description: "A study on involving children in the design of AI systems."
    },
    {
      title: "AI + Ethics Curricula for Middle School Youth: Lessons Learned from Three Project-Based Curricula",
      url: "https://link.springer.com/article/10.1007/s40593-022-00298-y",
      description: "An analysis of different AI ethics curricula for middle school students."
    }
  ];

  return (
    <main className="resources">
      <h1 className="resources__title">Resources for Parents and Teachers</h1>
      <p className="resources__description">
        Explore these valuable resources to learn more about ethical AI and how to teach it to children.
      </p>
      <ul className="resources__list">
        {resources.map((resource, index) => (
          <li key={index} className="resources__item">
            <h2 className="resources__item-title">
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </h2>
            <p className="resources__item-description">{resource.description}</p>
          </li>
        ))}
      </ul>
      <div className="resources__more-info">
        <h3>Want to dive deeper?</h3>
        <p>
          Check out our <a href="/full-resource-list">complete list of resources</a> for more in-depth information on AI ethics education.
        </p>
      </div>
    </main>
  );
};

export default ResourcesPage;
