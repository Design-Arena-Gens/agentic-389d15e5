/* eslint-disable react/no-unescaped-entities */
"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Hero } from "../components/Hero";
import { FormField, Input, TextArea, Select } from "../components/FormField";
import { PromptCard } from "../components/PromptCard";
import {
  INTERIOR_STYLES,
  SCALE_OBJECTS,
  CAMERA_SETTINGS,
  MOODS
} from "../lib/defaults";
import { generatePrompts } from "../lib/buildPrompts";
import {
  studioFormSchema,
  type StudioFormValues
} from "../lib/schema";

const DEFAULT_VALUES: StudioFormValues = {
  productName: "montre connectée Voxium S8",
  productDescriptors:
    "design biseauté, cadran verre saphir, boîtier titane microbillé, affichage always-on",
  material: "titane microbillé + verre saphir + bracelet cuir vegan grain fin",
  colorPalette: "titane graphite, cuir châtaigne profond, accents LED bleu glacier",
  brandTone: "positionnement luxe discret, précision technique, innovation humaine",
  interiorStyle: "showroom premium high-tech",
  scaleObjects: "tasse en céramique blanche",
  macroDetails:
    "zoom sur couronne texturée, gravure laser du logo Voxium, reflet saphir contrôlé",
  lightingNotes:
    "fenêtre latérale diffuse, réflecteur blanc, softbox overhead subtile",
  cameraSettings: CAMERA_SETTINGS.join(" · "),
  mood: "luxe discret"
};

export default function Page() {
  const {
    register,
    watch,
    formState: { errors }
  } = useForm<StudioFormValues>({
    resolver: zodResolver(studioFormSchema),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES
  });

  const currentValues = watch();

  const prompts = useMemo(
    () => generatePrompts(currentValues),
    [currentValues]
  );

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 py-12 md:px-8">
      <Hero />
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <form className="flex flex-col gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              label="Nom du produit"
              htmlFor="productName"
              hint="Restez précis et descriptif"
              error={errors.productName}
            >
              <Input id="productName" {...register("productName")} />
            </FormField>
            <FormField
              label="Matériaux & finitions"
              htmlFor="material"
              hint="Précisez matière dominante"
              error={errors.material}
            >
              <Input id="material" {...register("material")} />
            </FormField>
          </div>

          <FormField
            label="Description produit"
            htmlFor="productDescriptors"
            hint="Points différenciants, détails clés"
            error={errors.productDescriptors}
          >
            <TextArea
              id="productDescriptors"
              rows={3}
              {...register("productDescriptors")}
            />
          </FormField>

          <FormField
            label="Palette couleur"
            htmlFor="colorPalette"
            hint="3 à 4 teintes maximum"
            error={errors.colorPalette}
          >
            <Input id="colorPalette" {...register("colorPalette")} />
          </FormField>

          <FormField
            label="Ton de marque"
            htmlFor="brandTone"
            hint="Ambition, positionnement"
            error={errors.brandTone}
          >
            <Input id="brandTone" {...register("brandTone")} />
          </FormField>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              label="Style intérieur"
              htmlFor="interiorStyle"
              hint="Pour la mise en situation"
              error={errors.interiorStyle}
            >
              <Select id="interiorStyle" {...register("interiorStyle")}>
                {INTERIOR_STYLES.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </Select>
            </FormField>
            <FormField
              label="Objet d'échelle"
              htmlFor="scaleObjects"
              hint="Référence de taille"
              error={errors.scaleObjects}
            >
              <Select id="scaleObjects" {...register("scaleObjects")}>
                {SCALE_OBJECTS.map((object) => (
                  <option key={object} value={object}>
                    {object}
                  </option>
                ))}
              </Select>
            </FormField>
          </div>

          <FormField
            label="Détail macro prioritaire"
            htmlFor="macroDetails"
            hint="Texture, gravure, couture…"
            error={errors.macroDetails}
          >
            <TextArea
              id="macroDetails"
              rows={2}
              {...register("macroDetails")}
            />
          </FormField>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              label="Notes de lumière"
              htmlFor="lightingNotes"
              hint="Modificateurs, ambiance"
              error={errors.lightingNotes}
            >
              <TextArea
                id="lightingNotes"
                rows={2}
                {...register("lightingNotes")}
              />
            </FormField>
            <FormField
              label="Réglages caméra"
              htmlFor="cameraSettings"
              hint="Focale, ISO, HDR…"
              error={errors.cameraSettings}
            >
              <TextArea
                id="cameraSettings"
                rows={2}
                {...register("cameraSettings")}
              />
            </FormField>
          </div>

          <FormField
            label="Ambiance globale"
            htmlFor="mood"
            hint="Mood de la série"
            error={errors.mood}
          >
            <Select id="mood" {...register("mood")}>
              {MOODS.map((mood) => (
                <option key={mood} value={mood}>
                  {mood}
                </option>
              ))}
            </Select>
          </FormField>
        </form>

        <section className="grid gap-5">
          {prompts.map((prompt, index) => (
            <PromptCard key={prompt.id} prompt={prompt} index={index} />
          ))}
        </section>
      </section>
    </main>
  );
}
