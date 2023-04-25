"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var ModalDlgService = (function () {
    function ModalDlgService(modal) {
        this.modal = modal;
    }
    ModalDlgService.prototype.termsModalDlg = function () {
        return this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('Terms and Conditions')
            .body("\n            <p><h3>Introduction</h3></p>\n    <p>\n        These terms and conditions govern your use of this website; by using this website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website.\n    </p>\n    <p><h3>1. License to Service use</h3></p>\n\n    <p>\n        Unless otherwise stated, Bizns tool and/or its licensors own the intellectual property rights in the service and material on the service site.  Subject to the license below, all these intellectual property rights are reserved.\n    </p>\n    <p>\n        You may view, download for download and print from the service for your own organization use, subject to the restrictions set out below and elsewhere in these terms and conditions.\n    </p>\n    <p>You must not:</p>\n    <ul>\n        <li>\n            republish material from this website (including republication on another service)\n        </li>\n        <li>\n            sell, rent or sub-license material from the cloud service\n        </li>\n        <li>\n            show any material from the site in public\n        </li>\n        <li>\n            reproduce, duplicate, copy or otherwise exploit material on this service and site for a commercial purpose\n\n        </li>\n    </ul>\n    <p><h3>2. Acceptable use</h3></p>\n\n    <p>\n        You must not use this service in any way that causes, or may cause, damage to the service or impairment of the availability or accessibility of the service; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.\n    </p>\n    <p>\n        You must not use this service to copy, store, host, transmit, send, use, publish or distribute any material which consists of any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.\n    </p>\n    <p><h3>3. Restricted access</h3></p>\n\n    <p>\n        If Bizns tool provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential.\n    </p>\n    <p>\n        Bizns tool may disable your user ID and password in Bizns tool\u2019s sole discretion without notice or explanation.\n    </p>\n    <p><h3>4. No warranties</h3></p>\n\n    <p>\n        This service is provided \u201Cas is\u201D without any representations or warranties, express or implied.  Bizns tool makes no representations or warranties in relation to this website or the information and materials provided on this website.\n    </p>\n    <p>\n        Without prejudice to the generality of the foregoing paragraph, Bizns tool does not warrant that:\n    </p>\n    <p>\n        <ul>\n            <li>\n                this service will be constantly available, or available at all; or\n            </li>\n            <li>the information on this service is complete, true, accurate or non-misleading.</li>\n        </ul>\n    </p>\n\n    <p>\n        Nothing on this service or site constitutes or is meant to constitute, an advice of any kind.\n    </p>\n    <p><h3>5. Limitations of liability</h3></p>\n\n    <p>\n        Bizns tool will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:\n    </p>\n    <p>\n        <ul>\n            <li>\n                for any indirect, special or consequential loss; or\n            </li>\n            <li>\n                for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.\n            </li>\n        </ul>\n    </p>\n    <p>\n        These limitations of liability apply even if Bizns tool has been expressly advised of the potential loss.\n\n    </p>\n    <p><h3>6. Indemnity</h3></p>\n\n    <p>\n        You hereby indemnify Bizns tool and undertake to keep Bizns tool indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by Bizns tool to a third party in settlement of a claim or dispute on the advice of Bizns tool\u2019s legal advisers) incurred or suffered by Bizns tool arising out of any breach by you of any provision of these terms and conditions.\n    </p>\n    <p><h3>7. Breaches of these terms and conditions</h3></p>\n\n    <p>\n        Without prejudice to Bizns tool\u2019s other rights under these terms and conditions, if you breach these terms and conditions in any way, Bizns tool may take such action as Bizns tool deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the service and site, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings against you.\n    </p>\n    <p><h3>8. Assignment</h3></p>\n\n    <p>\n        Bizns tool may transfer, sub-contract or otherwise deal with Bizns tool\u2019s rights and/or obligations under these terms and conditions without notifying you or obtaining your consent.\n    </p>\n    <p>\n        You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.\n    </p>\n    <p><h3>9. Service Payment and Refunds</h3></p>\n\n    <p>\n        Payment for paid license are accepted in credit or debit card with PCI Compliance processing, All paid plans are supported in monthly and annual subscriptions with a minimum of 2 users required. Upgraded accounts will be charged on credit card approval. An annual subscription cannot be downgraded to monthly before its end of time period. </p>\n    <p>\n        Once upgraded plans account be refunded after a trial period, but you can cancel the account by sending us an email at <a href=\"\"> support@biznstool.com</a> Price change in service may occur over period time based on different cases, We will Notify you about any changes in 90 days.\n     </p>\n    <p><h3>10. Discontinue or End Service  </h3></p>\n\n    <p>\n        You can request for termination of service, we will terminate service once request received, please send us an email at support@biznstool.com for the request. You can also delete a user from your account for termination, but once delete account cannot retrieve data. But you will be charged until end of subscription period.\n     </p>\n    <p><h3>11. Law and jurisdiction</h3></p>\n\n    <p>\n        These terms and conditions will be governed by and construed in accordance with the State of California, and any disputes relating to these terms and conditions will be subject to the non-exclusive jurisdiction of the courts of  State of California.\n    </p>\n\n    <p>\n        If you have any questions about terms and conditions or service, please reach us at<a href=\"\"> support@biznstool.com</a>\n    </p>")
            .open();
    };
    ModalDlgService.prototype.privacyModalDlg = function () {
        return this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('Privacy Policy')
            .body("<p>\n        Your privacy is important to<a href=\"\"> www.biznstool.com </a> This privacy statement provides information about the personal information that Bizns tool collects, and the ways in which Bizns tool uses that personal information.\n    </p>\n    <p><h3>1. Personal information collection</h3></p>\n\n    <p><a href=\"\">www.biznstool.com</a> may collect and use the following kinds of personal information: </p>\n    <p>\n        <ul>\n            <li>\n                information that you provide using for the purpose of registering with service includes first name, last name, email id and company name\n            </li>\n            <li>\n                information about payment transactions carried out over this service includes credit card details, but we don\u2019t store them with us. Its stored securely with PCI Compliance providers.\n            </li>\n            <li>\n                information that you provide for the purpose of subscribing to the website services first name, last name, email id, company name and other business transaction details\n            </li>\n        </ul>\n    </p>\n    <p><h3>2. Using personal information</h3></p>\n\n    <p>Bizns tool may use your personal information to:  </p>\n\n    <p>\n        <ul>\n            <li>\n                administer this service and site\n            </li>\n            <li>\n                personalize the service and site for you.\n            </li>\n            <li>\n                send to you products that you purchase.\n            </li>\n            <li>\n                supply to you services that you purchase and provide access to other external app services like Google, MailChip, QuickBooks online and more.\n            </li>\n            <li>\n                send to you statements and invoices\n            </li>\n            <li>\n                collect payments from you\n            </li>\n            <li>\n                send you marketing communications on approval\n            </li>\n        </ul>\n    </p>\n    <p>\n        In addition to the disclosures reasonably necessary for the purposes identified elsewhere above, Bizns tool may disclose your personal information to the extent that it is required to do so by law, in connection with any legal proceedings or prospective legal proceedings, and in order to establish, exercise or defend its legal rights.\n    </p>\n    <p><h3>3. Securing your data</h3></p>\n\n    <p>\n        Bizns tool will take reasonable technical and organisational precautions to prevent the loss, misuse or alteration of your personal information.\n    </p>\n    <p>\n        Bizns tool will store all the personal information you provide on its secure servers.\n    </p>\n\n    <p><h3>4. Cookies and Local Storage</h3></p>\n\n    <p>\n        Bizns tool uses Cookies and Local Storage (HTML5) from services to provide better features and functionality, Bizns tool in noway Cookies and Local Storage for personal benefits.\n    </p>\n\n    <p><h3>5. Updating this statement</h3></p>\n\n\n    Bizns tool may update this privacy policy by posting a new version on this website.\n\n    You should check this page occasionally to ensure you are familiar with any changes.\n\n    <p><h3>6. Third Party Services</h3></p>\n\n    <p>\n        This site and service  contains links to other websites.\n    </p>\n    <p>\n        Bizns tool is not responsible for the privacy policies or practices of any third party. Please read carefully about Thrid Party Services provided by Bizns tool, before you give us access.\n    </p>\n    <p><h3>7. Contact Bizns tool</h3></p>\n\n    <p>\n        If you have any questions about this privacy policy or Bizns tool treatment of your personal information, please write:\n    </p>\n    <p>\n        by email to <a href=\"\">privacy@biznstool.com</a>\n\n    </p>")
            .open();
    };
    return ModalDlgService;
}());
ModalDlgService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [bootstrap_1.Modal])
], ModalDlgService);
exports.ModalDlgService = ModalDlgService;
//# sourceMappingURL=modal-dlg.service.js.map