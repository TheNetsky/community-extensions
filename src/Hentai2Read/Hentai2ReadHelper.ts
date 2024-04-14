import { SearchRequest } from '@paperback/types'

import entities = require('entities')


export const decodeHTMLEntity = (str: string): string => {
    return entities.decodeHTML(str)
}

export const getFormBody = (query: SearchRequest): string => {
    let formBody =
        'cmd_wpm_wgt_mng_sch_sbm=Search' +
        '&txt_wpm_wgt_mng_sch_nme=' +
        '&cmd_wpm_pag_mng_sch_sbm=' +
        '&txt_wpm_pag_mng_sch_nme=' + (query.title ?? '') +
        '&txt_wpm_pag_mng_sch_ats=' + (query.parameters?.['artist'] ?? '') +
        '&txt_wpm_pag_mng_sch_chr=' + (query.parameters?.['character'] ?? '') +
        '&txt_wpm_pag_mng_sch_rls_yer=' + (query.parameters?.['release-year'] ?? '')

    for (const tag of query.includedTags) {
        formBody += '&chk_wpm_pag_mng_sch_mng_tag_inc[]=' + tag.id
    }
    for (const tag of query.excludedTags) {
        formBody += '&chk_wpm_pag_mng_sch_mng_tag_exc[]' + tag.id
    }
    return formBody
}


export const isLastPage = ($: CheerioStatic): boolean => {
    return $('i.fa.fa-angle-double-right').length == 0
}

export const parseDate = (dateString: string): Date => {
    const match = dateString.match(/(\d+)(\w+)/)
    const currentDate = new Date()
    if (match && match != null) {
        const quantity = parseInt(match[1] as string, 10)
        const unit = (match[2] as string).toLowerCase()

        if (unit === 'second' || unit === 'seconds') {
            currentDate.setDate(currentDate.getSeconds() - quantity)
        }
        if (unit === 'minute' || unit === 'minutes') {
            currentDate.setDate(currentDate.getMinutes() - quantity)
        }
        if (unit === 'hour' || unit === 'hours') {
            currentDate.setDate(currentDate.getHours() - quantity)
        }
        else if (unit === 'day' || unit === 'days') {
            currentDate.setDate(currentDate.getDate() - quantity)
        }
        else if (unit === 'week' || unit === 'weeks') {
            currentDate.setDate(currentDate.getDate() - (quantity * 7))
        }
        else if (unit === 'month' || unit === 'months') {
            currentDate.setMonth(currentDate.getMonth() - quantity)
        }
        else if (unit === 'year' || unit === 'years') {
            currentDate.setFullYear(currentDate.getFullYear() - quantity)
        }
    }
    return currentDate

}