import { SaasFeatures } from "@/src/features/saas-features/SaasFeatures";
import { SaasHero } from "@/src/features/saas-hero/SaasHero";

export default function Saas() {
    return (
        <main>
            <SaasHero />
            <SaasFeatures />
        </main>
    );
}