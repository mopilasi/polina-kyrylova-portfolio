import React from "react";
import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    subtitle: string;
    background: string;
    problem: string[];
    solution: Array<{
      title: string;
      description: string;
      activities: string[];
    }>;
    results: string[];
    link?: string;
    linkText?: string;
    caseStudyLink?: string;
    image?: string;
    tags: string[];
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-8">
        {project.image && (
          <div className="flex justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-32 h-32 object-contain"
            />
          </div>
        )}

        <div>
          <p className="text-lg font-medium text-gray-600 mb-4">
            {project.subtitle}
          </p>
          <h3 className="text-xl font-bold mb-4">Background</h3>
          <p className="text-gray-700 leading-relaxed">{project.background}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Problem</h3>
          <ul className="space-y-2">
            {project.problem.map((item, index) => (
              <li key={index} className="text-gray-700 leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Solution</h3>
          <div className="space-y-6">
            {project.solution.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
                <p className="text-gray-700 mb-3">{section.description}</p>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Key activities:
                  </p>
                  <ul className="space-y-1">
                    {section.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="text-gray-700 text-sm">
                        • {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {project.caseStudyLink ? (
            <a
              href={project.caseStudyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-blue-600 hover:underline flex items-center gap-2"
            >
              View full case study
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <>
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed">
                    • {result}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {project.link && (
          <div className="flex justify-center pt-4">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                {project.linkText || "Learn More"}
              </a>
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}
