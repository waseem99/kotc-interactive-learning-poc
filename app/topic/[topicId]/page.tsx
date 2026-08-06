import { TopicLearningPage } from "@/components/topic-learning-page";

export default async function TopicPage({ params }: { params: Promise<{ topicId: string }> }) {
  const { topicId } = await params;
  return <TopicLearningPage topicId={topicId} />;
}
