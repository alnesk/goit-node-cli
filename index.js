import servicesContacts from "./contacts.js";
import { program } from "commander";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await servicesContacts.listContacts();
      return console.log(contactList);
      break;

    case "get":
      const contactFind = await servicesContacts.getContactById(id);
      return console.log(contactFind);
      break;

    case "add":
      const contactAdd = await servicesContacts.addContact(name, email, phone);
      return console.log(contactAdd);
      break;

    case "remove":
      const contactRemove = await servicesContacts.removeContact(id);
      return console.log(contactRemove);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

invokeAction(options);