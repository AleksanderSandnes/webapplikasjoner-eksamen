import { supportEmailService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import { sendMail } from '../utils/sendEmail.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const supportEmail = await supportEmailService.createSupportEmail(req.body);
  try {
    await sendMail({
      email: supportEmail.email,
      subject: `Din epost med emne ${supportEmail.subject} ble mottatt`,
      message: `Takk for at du tar kontakt med oss, vi har mottatt din henvdendelse og vil komme tilbake til deg så fort som mulig.
Din melding:
${supportEmail.content}`,
    });
    console.log('Epost er sendt');
  } catch (error) {
    console.log(error);
  }
  res.status(201).json({ success: true, data: supportEmail });
});

export const get = catchAsyncErrors(async (req, res, next) => {
  const supportEmail = await supportEmailService.getSupportEmailById(
    req.params.id
  );
  if (supportEmail) {
    return next(
      new ErrorHandler(`Finner ikke support email med ${req.params.id}`, 404)
    );
  }
  res.status(201).json({ success: true, data: supportEmail });
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const categories = await supportEmailService.listSupportEmails(req.query);
  res.status(200).json({ success: true, data: categories });
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let supportEmail = await supportEmailService.getSupportEmailById(
    req.params.id
  );
  if (supportEmail) {
    return next(
      new ErrorHandler(`Finner ikke support email med ${req.params.id}`, 404)
    );
  }
  supportEmail = await supportEmailService.removeSupportEmail(req.params.id);
  res.status(204).json({});
});
