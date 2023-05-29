import { sequence } from '@sveltejs/kit/hooks'
import { handleErrorRedirectToHomeIfPageNotFound, handlePreferredLang } from 'libs/handlers'
import { logger } from 'libs/logger'

logger.serverSetup()

export const handle = sequence(logger.handleLogger(), handlePreferredLang)

export const handleError = logger.handleErrorWithLogger(handleErrorRedirectToHomeIfPageNotFound)
