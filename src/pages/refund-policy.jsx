import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const RefundPolicyPage = ({ location }) => {
    return (
        <Layout location={location}>
            <main className="px-3 lg:px-10 py-12">
                <article className="max-w-4xl mx-auto">
                    <h1 className="text-3xl lg:text-5xl font-bold font-heading mb-8">
                        Kebijakan Pengembalian Dana (Refund Policy)
                    </h1>
                    
                    <div className="prose prose-lg max-w-none space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold mt-8 mb-4">1. Ketentuan Umum</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Kami di zulzidan.com berkomitmen untuk memberikan layanan terbaik kepada setiap klien. 
                                Kebijakan pengembalian dana ini dibuat untuk melindungi hak Anda sebagai pelanggan dan 
                                memastikan transparansi dalam setiap transaksi.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mt-8 mb-4">2. Skema Pembayaran Bertahap</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Untuk melindungi kedua belah pihak, kami menerapkan sistem pembayaran bertahap:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>
                                    <strong>Down Payment (DP) 50%:</strong> Untuk mengunci slot proyek dan memulai pekerjaan
                                </li>
                                <li>
                                    <strong>Pembayaran Tahap 2 (40%):</strong> Setelah staging selesai dan siap untuk review
                                </li>
                                <li>
                                    <strong>Pembayaran Final (10%):</strong> Setelah website live dan serah terima selesai
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mt-8 mb-4">3. Syarat Pengembalian Dana</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Pengembalian dana dapat diajukan dalam kondisi berikut:
                            </p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">3.1 Pembatalan Sebelum Development Dimulai</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Jika Anda membatalkan proyek sebelum fase development dimulai (sebelum coding dimulai):
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                                        <li>Pengembalian dana sebesar <strong>90% dari DP</strong> yang telah dibayarkan</li>
                                        <li>Potongan 10% untuk biaya administrasi dan konsultasi yang telah dilakukan</li>
                                        <li>Proses pengembalian dana maksimal 14 hari kerja</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2">3.2 Pembatalan Setelah Development Dimulai</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Jika Anda membatalkan proyek setelah development dimulai tetapi sebelum staging:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                                        <li><strong>DP tidak dapat dikembalikan</strong> karena pekerjaan telah dimulai</li>
                                        <li>File kerja yang telah diselesaikan dapat diserahkan kepada Anda</li>
                                        <li>Tidak ada kewajiban pembayaran untuk tahap selanjutnya</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2">3.3 Pembatalan Setelah Staging Selesai</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Setelah staging selesai dan pembayaran tahap 2 telah dilakukan:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                                        <li><strong>Tidak ada pengembalian dana</strong> untuk pembayaran yang telah dilakukan</li>
                                        <li>Anda berhak mendapatkan semua file dan akses website yang telah dikembangkan</li>
                                        <li>Dokumentasi dan panduan penggunaan tetap diberikan</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2">3.4 Keterlambatan dari Pihak Kami</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Jika kami tidak dapat menyelesaikan proyek sesuai timeline yang disepakati tanpa alasan yang jelas:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                                        <li>Anda berhak mendapatkan kompensasi berupa perpanjangan masa dukungan teknis gratis</li>
                                        <li>Atau diskon 10-20% untuk pembayaran tahap berikutnya</li>
                                        <li>Jika keterlambatan lebih dari 30 hari tanpa komunikasi, Anda dapat mengajukan refund 50% dari total yang telah dibayar</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mt-8 mb-4">4. Kondisi yang Tidak Memenuhi Syarat Refund</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Pengembalian dana TIDAK dapat dilakukan dalam kondisi berikut:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>
                                    Pembatalan setelah staging selesai dan pembayaran tahap 2 telah dilakukan
                                </li>
                                <li>
                                    Perubahan keputusan atau kebutuhan klien setelah proyek berjalan (perubahan scope)
                                </li>
                                <li>
                                    Keterlambatan dari pihak klien dalam menyediakan materi atau feedback yang diperlukan
                                </li>
                                <li>
                                    Website sudah diserahkan dan diterima dengan konfirmasi tertulis/email
                                </li>
                                <li>
                                    Layanan tambahan (add-ons) di luar kontrak awal yang sudah dikerjakan
                                </li>
                                <li>
                                    Revisi tambahan di luar batas yang ditentukan dalam paket
                                </li>
                                <li>
                                    Proyek yang tertunda lebih dari 60 hari karena tidak ada respon dari klien
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mt-8 mb-4">5. Prosedur Pengajuan Pengembalian Dana</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Untuk mengajukan pengembalian dana (jika memenuhi syarat):
                            </p>
                            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                                <li>
                                    Hubungi kami melalui email atau WhatsApp dengan subjek <strong>"Refund Request - [Nama Proyek]"</strong>
                                </li>
                                <li>
                                    Sertakan alasan pembatalan, nomor invoice, dan bukti komunikasi
                                </li>
                                <li>
                                    Tim kami akan merespon dalam maksimal <strong>3 hari kerja</strong>
                                </li>
                                <li>
                                    Jika disetujui, proses pengembalian dana akan dilakukan dalam <strong>14 hari kerja</strong>
                                </li>
                                <li>
                                    Pengembalian dana dilakukan ke rekening yang sama dengan pembayaran awal
                                </li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mt-8 mb-4">6. Force Majeure</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Dalam kondisi force majeure (bencana alam, pandemi, gangguan layanan pihak ketiga yang berkepanjangan):
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Pengembalian dana akan didiskusikan secara case-by-case</li>
                                <li>Kedua belah pihak sepakat untuk mencari solusi terbaik yang adil</li>
                                <li>Timeline proyek dapat disesuaikan tanpa penalti</li>
                                <li>Komunikasi terbuka akan dijaga untuk menyelesaikan situasi dengan baik</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mt-8 mb-4">7. Perlindungan dari Chargeback</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Untuk melindungi kedua belah pihak dari risiko chargeback yang tidak sah:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>
                                    Setiap pembayaran akan didokumentasikan dengan invoice resmi
                                </li>
                                <li>
                                    Klien wajib mengonfirmasi setiap tahap pembayaran
                                </li>
                                <li>
                                    Serah terima proyek dilakukan dengan dokumentasi tertulis/email
                                </li>
                                <li>
                                    Chargeback yang diajukan tanpa komunikasi terlebih dahulu akan ditindaklanjuti secara hukum
                                </li>
                                <li>
                                    Semua komunikasi, kesepakatan proyek, dan progress pengerjaan akan disimpan sebagai arsip
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mt-8 mb-4">8. Garansi dan Dukungan Pasca-Proyek</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Setelah website live, kami menyediakan:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>
                                    <strong>Periode Revisi:</strong> 1-3 ronde revisi mayor (tergantung paket yang dipilih)
                                </li>
                                <li>
                                    <strong>Garansi Bug Fixing:</strong> Gratis selama periode yang tercantum di paket (1-3 bulan)
                                </li>
                                <li>
                                    <strong>Dukungan Teknis:</strong> Bantuan teknis sesuai dengan masa support di paket
                                </li>
                                <li>
                                    <strong>Maintenance Rutin:</strong> Dapat dilanjutkan dengan paket maintenance bulanan (opsional)
                                </li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                <em>Catatan: Biaya maintenance bulanan tidak termasuk dalam harga pembuatan website (kecuali Paket Premium yang include 3 bulan maintenance gratis).</em>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mt-8 mb-4">9. Kontak</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Jika Anda memiliki pertanyaan lebih lanjut mengenai kebijakan pengembalian dana, silakan 
                                hubungi kami melalui:
                            </p>
                            <ul className="list-none space-y-2 text-gray-700 mt-4">
                                <li>
                                    <strong>Email:</strong>{' '}
                                    <a href="mailto:muhammadzulzidan@gmail.com" className="text-indigo-600 underline">
                                        muhammadzulzidan@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <strong>WhatsApp:</strong>{' '}
                                    <a 
                                        href="https://api.whatsapp.com/send?phone=6281354789375&text=halo%20zulzidan.com%2C%20saya%20ingin%20bertanya%20tentang%20kebijakan%20refund" 
                                        className="text-indigo-600 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        +62 813-5478-9375
                                    </a>
                                </li>
                                <li>
                                    <strong>Website:</strong>{' '}
                                    <a href="https://zulzidan.com" className="text-indigo-600 underline">
                                        zulzidan.com
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section className="bg-gray-50 p-6 rounded-lg mt-8">
                            <p className="text-sm text-gray-600">
                                <strong>Catatan Penting:</strong> Kebijakan ini berlaku efektif sejak tanggal 15 Oktober 2025 
                                dan dapat diperbarui sewaktu-waktu. Kami akan memberitahukan perubahan kebijakan melalui 
                                website resmi kami. Dengan menggunakan layanan kami, Anda dianggap telah membaca, memahami, 
                                dan menyetujui kebijakan pengembalian dana ini.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
        </Layout>
    );
};

export default RefundPolicyPage;

export function Head({ location }) {
    return (
        <SEO
            title="Kebijakan Pengembalian Dana (Refund Policy) - zulzidan.com"
            pathname={location.pathname}
            description="Kebijakan pengembalian dana untuk layanan pembuatan website dan jasa digital marketing di zulzidan.com. Melindungi hak pelanggan dan transparansi transaksi."
        />
    );
}
