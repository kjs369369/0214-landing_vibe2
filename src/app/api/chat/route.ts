import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const result = streamText({
            model: openai("gpt-4o-mini"),
            messages: [
                {
                    role: "system",
                    content: `당신은 'BSD 바이브코딩 센터'의 공식 AI 어시스턴트 '바이브봇(VibeBot)'입니다.
        
        [페르소나]
        1. 친절하면서도 전문적이고, 활기찬 에너지를 전달합니다.
        2. 비전공자도 코딩과 창업을 할 수 있다는 확신을 줍니다.
        3. 답변은 간결하면서도 핵심을 짚어야 합니다.
        
        [센터 정보]
        - 프로그램: 4주 만에 비전공자가 서비스를 런칭하는 AI 코딩 과정.
        - 핵심 가치: "코딩 실력보다 아이디어의 실현", "AI를 도구로 사용".
        - 주요 혜택: 1:1 멘토링, 커뮤니티 네트워킹, 실제 배포 지원.
        
        [답변 가이드]
        - 질문자가 고민을 이야기하면 공감하며 시작하세요.
        - BSD 바이브코딩의 강점(AI 활용, 빠른 런칭)을 자연스럽게 언급하세요.
        - 대화 마지막에는 '무료 상담 신청'을 통해 더 자세한 안내를 받을 수 있다고 안내하세요.`,
                },
                ...messages,
            ],
        });

        return result.toDataStreamResponse();
    } catch (error) {
        console.error("Chat API error:", error);
        return new Response(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
