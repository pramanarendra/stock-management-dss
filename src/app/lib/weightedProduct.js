export const countPreference = (alternatives, criterias) => {
    let s = []
    let i = 0
    for (const alternative in alternatives) {

        let temp = 1
        for(const criteria in criterias) {
            if(criterias[criteria][0] == 1) {
                temp = temp*Math.pow(alternatives[alternative][criteria], criterias[criteria][2]*criterias[criteria][1])
            }
        }
        s.push({id: alternatives[alternative].id, s: temp})
    }
    return s
}

const countFinalScore = (s) => {
    let finalScore = []
    let sum = 0
    s.forEach(element => {
        sum += element.s
    });
    
    s.forEach(element => {
        finalScore.push({id: element.id, score: (element.s/sum)})
    });
    return finalScore
}

const ranking = (score) => {
    score = score.sort((a, b) => {
        return b.score - a.score
    })

    return score
}

export default function weightedProduct(model, alternatives) {
    const s = countPreference(alternatives, model);

    const v = countFinalScore(s)
    const rankedProduct = ranking(v)

    return rankedProduct
}