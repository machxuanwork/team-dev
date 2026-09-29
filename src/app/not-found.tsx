import { LinkButton } from "@/components/ui/link-button"

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
      <p className="font-heading text-8xl text-brand italic md:text-9xl">404</p>
      <h1 className="mt-4 text-3xl font-medium md:text-4xl">Ôi, trang này lạc đường rồi</h1>
      <p className="mt-4 text-muted-foreground">Có thể đường dẫn đã thay đổi hoặc trang không còn tồn tại. Mình quay về trang chủ nhé?</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <LinkButton href="/" arrow>
          Về trang chủ
        </LinkButton>
        <LinkButton href="/contact" variant="ghost">
          Liên hệ tụi mình
        </LinkButton>
      </div>
    </section>
  )
}
