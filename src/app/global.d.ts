import { Language } from "./i18n/settings";

declare global {
  declare namespace KG {
    declare namespace APP {
      declare namespace BASE {
        interface ServerSideProps {
          params: {
            lang: Language;
          };
        }
        interface ClientSideProps {
          children: React.ReactNode;
          params: {
            lang: Language;
          };
        }
      }
    }
  }
}
