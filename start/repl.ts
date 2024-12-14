import app from '@adonisjs/core/services/app'
import repl from '@adonisjs/core/services/repl'
import { fsImportAll } from '@adonisjs/core/helpers'

repl.addMethod('loadModels', async () => {
    const models = await fsImportAll(app.makePath('app/models'))
    repl.server!.context.models = models

    repl.notify('Imported models. You can access them using the "models" property')
    repl.server!.displayPrompt()
})

// Added this method to load jobs
// repl.addMethod('loadJobs', async () => {
//     const jobs = await fsImportAll(app.makePath('app/jobs'))
//     repl.server!.context.jobs = jobs

//     repl.notify('Imported jobs. You can access them using the "jobs" property')
//     repl.server!.displayPrompt()
// })
