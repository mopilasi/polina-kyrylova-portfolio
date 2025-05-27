// src/components/blog/PostModal.tsx
import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { BlogPost } from "@/types/blog";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

export function PostModal({
  isOpen,
  onClose,
  post,
  isLoading = false,
  error = null,
  onRetry,
}: PostModalProps) {
  const formattedDate = post?.date
    ? format(new Date(post.date), "MMMM d, yyyy")
    : "";

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-red-600 mb-4">{error}</p>
          {onRetry && (
            <Button onClick={onRetry} variant="outline">
              Retry
            </Button>
          )}
        </div>
      ) : post ? (
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
              <time dateTime={post.date} className="mr-4">
                {formattedDate}
              </time>
              <span className="mx-2 hidden sm:inline">·</span>
              <span className="mr-4">{post.readTime}</span>
              <span className="mx-2 hidden sm:inline">·</span>
              <span className="text-blue-600 font-medium">{post.category}</span>
            </div>
          </div>

          {/* Content Section with Prose Styling */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Customize heading styles
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-xl font-semibold text-gray-900 mt-6 mb-3"
                    {...props}
                  />
                ),
                // Customize paragraph styles
                p: ({ node, ...props }) => (
                  <p
                    className="text-gray-700 mb-4 leading-relaxed"
                    {...props}
                  />
                ),
                // Customize list styles
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />
                ),
                // Customize blockquote
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-4 border-blue-600 pl-4 py-2 my-4 bg-blue-50 rounded-r"
                    {...props}
                  />
                ),
                // Customize links
                a: ({ node, ...props }) => (
                  <a
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
                // Customize strong/bold text
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold" {...props} />
                ),
              }}
            >
              {post.content || ""}
            </ReactMarkdown>
          </div>

          {/* Footer Section */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      `Check out "${post.title}" by @yourhandle`
                    )}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Share on Twitter
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(window.location.href);
                      // You can add a toast notification here
                    } catch (err) {
                      console.error("Failed to copy URL", err);
                    }
                  }}
                >
                  Copy Link
                </Button>
              </div>
              <div className="text-sm text-gray-500">
                <button
                  onClick={() => {
                    onClose();
                    document.getElementById("blog")?.scrollIntoView();
                  }}
                  className="text-blue-600 hover:underline flex items-center"
                >
                  ← Back to all posts
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
