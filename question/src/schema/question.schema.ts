import { object, string, TypeOf } from 'zod';

export const createQuestionSchema = object({
    body: object({
        prompt_text: string({
            required_error: 'question is required'
        }),
        answer_text: string({
            required_error: 'answer is required'
        })
    }

    )

});


export type createQuestionInput = TypeOf<typeof createQuestionSchema>;